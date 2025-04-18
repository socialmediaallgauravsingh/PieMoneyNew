import { TaxFormData, TaxCalculationResult, TaxRegimeResult, TaxSlabBreakup } from '../types';

// Tax slabs for old regime (FY 2023-24)
const oldRegimeSlabs = [
  { from: 0, to: 250000, rate: 0 },
  { from: 250000, to: 500000, rate: 0.05 },
  { from: 500000, to: 1000000, rate: 0.2 },
  { from: 1000000, to: null, rate: 0.3 }
];

// Tax slabs for new regime (FY 2023-24)
const newRegimeSlabs = [
  { from: 0, to: 300000, rate: 0 },
  { from: 300000, to: 600000, rate: 0.05 },
  { from: 600000, to: 900000, rate: 0.1 },
  { from: 900000, to: 1200000, rate: 0.15 },
  { from: 1200000, to: 1500000, rate: 0.2 },
  { from: 1500000, to: null, rate: 0.3 }
];

// Calculate deductions for old regime
const calculateOldRegimeDeductions = (data: TaxFormData): number => {
  // Standard deduction
  let totalDeductions = 50000;
  
  // Section 80C deductions (max 1.5L)
  totalDeductions += Math.min(data.section80C, 150000);
  
  // Health insurance premium deduction (max 25K for self, 50K if senior)
  totalDeductions += Math.min(data.section80D, data.age >= 60 ? 50000 : 25000);
  
  // NPS contribution deduction (max 50K additional under 80CCD(1B))
  totalDeductions += Math.min(data.nps, 50000);
  
  // Home loan interest deduction (max 2L)
  totalDeductions += Math.min(data.homeLoanInterest, 200000);
  
  // HRA exemption (simplified calculation)
  const hraExemption = Math.min(
    data.hra,
    data.rent > 0 ? data.rent - (0.1 * data.income) : 0,
    0.5 * data.income
  );
  totalDeductions += Math.max(0, hraExemption);
  
  // Other deductions
  totalDeductions += data.otherDeductions;
  
  return totalDeductions;
};

// Calculate tax for a given regime
const calculateRegimeTax = (
  taxableIncome: number, 
  slabs: { from: number; to: number | null; rate: number }[]
): { taxAmount: number; breakup: TaxSlabBreakup[] } => {
  let taxAmount = 0;
  const breakup: TaxSlabBreakup[] = [];
  
  for (const slab of slabs) {
    const slabFrom = slab.from;
    const slabTo = slab.to;
    const rate = slab.rate;
    
    if (taxableIncome > slabFrom) {
      const slabAmount = slabTo ? Math.min(taxableIncome, slabTo) - slabFrom : taxableIncome - slabFrom;
      const slabTax = slabAmount * rate;
      taxAmount += slabTax;
      
      breakup.push({
        slabFrom,
        slabTo,
        rate,
        taxAmount: slabTax
      });
    }
  }
  
  // Add cess (4%)
  const cessAmount = taxAmount * 0.04;
  taxAmount += cessAmount;
  
  return { taxAmount, breakup };
};

// Main tax calculation function
export const calculateTax = (data: TaxFormData): TaxCalculationResult => {
  // Old Regime Calculation
  const oldRegimeDeductions = calculateOldRegimeDeductions(data);
  const oldRegimeTaxableIncome = Math.max(0, data.income - oldRegimeDeductions);
  const { taxAmount: oldRegimeTaxAmount, breakup: oldRegimeBreakup } = 
    calculateRegimeTax(oldRegimeTaxableIncome, oldRegimeSlabs);
  
  // New Regime Calculation (less deductions, different slabs)
  const newRegimeTaxableIncome = Math.max(0, data.income - 50000); // Only standard deduction
  const { taxAmount: newRegimeTaxAmount, breakup: newRegimeBreakup } = 
    calculateRegimeTax(newRegimeTaxableIncome, newRegimeSlabs);
  
  // Determine recommended regime
  const recommendedRegime = oldRegimeTaxAmount <= newRegimeTaxAmount ? 'old' : 'new';
  const totalSavings = Math.abs(oldRegimeTaxAmount - newRegimeTaxAmount);
  
  // Create result object
  const result: TaxCalculationResult = {
    oldRegime: {
      taxableIncome: oldRegimeTaxableIncome,
      taxAmount: oldRegimeTaxAmount,
      effectiveTaxRate: (oldRegimeTaxAmount / data.income) * 100,
      breakup: oldRegimeBreakup
    },
    newRegime: {
      taxableIncome: newRegimeTaxableIncome,
      taxAmount: newRegimeTaxAmount,
      effectiveTaxRate: (newRegimeTaxAmount / data.income) * 100,
      breakup: newRegimeBreakup
    },
    recommendedRegime,
    totalSavings
  };
  
  return result;
};