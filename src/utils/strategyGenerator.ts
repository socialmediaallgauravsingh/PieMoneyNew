import { TaxFormData, TaxCalculationResult, TaxSavingStrategy } from '../types';

export const generateTaxStrategies = (
  data: TaxFormData,
  result: TaxCalculationResult
): TaxSavingStrategy[] => {
  const strategies: TaxSavingStrategy[] = [];
  
  // Helper function to add a strategy
  const addStrategy = (
    category: string,
    title: string,
    description: string,
    potentialSavings: number,
    priority: 'high' | 'medium' | 'low'
  ) => {
    strategies.push({
      id: `strategy-${Math.random().toString(36).substr(2, 9)}`,
      category,
      title,
      description,
      potentialSavings,
      priority
    });
  };
  
  // 1. Section 80C strategy (if not maxed out)
  const remainingSection80C = 150000 - data.section80C;
  if (remainingSection80C > 0) {
    const potentialSavings = remainingSection80C * 0.3; // Assuming highest tax bracket
    addStrategy(
      '80C',
      'Max out your 80C investments',
      `You can invest additional ₹${remainingSection80C.toLocaleString()} in tax-saving instruments like ELSS, PPF, or EPF to reduce your taxable income.`,
      potentialSavings,
      remainingSection80C > 50000 ? 'high' : 'medium'
    );
  }
  
  // 2. NPS strategy
  const remainingNPS = 50000 - data.nps;
  if (remainingNPS > 0) {
    const potentialSavings = remainingNPS * 0.3; // Assuming highest tax bracket
    addStrategy(
      'NPS',
      'Contribute to National Pension System',
      `Contributing ₹${remainingNPS.toLocaleString()} to NPS under Section 80CCD(1B) can give you additional tax benefits beyond 80C limit.`,
      potentialSavings,
      'high'
    );
  }
  
  // 3. Health Insurance (Section 80D)
  const maxHealth = data.age >= 60 ? 50000 : 25000;
  const remainingHealth = maxHealth - data.section80D;
  if (remainingHealth > 0) {
    const potentialSavings = remainingHealth * 0.3; // Assuming highest tax bracket
    addStrategy(
      '80D',
      'Get Health Insurance Coverage',
      `Paying health insurance premium of ₹${remainingHealth.toLocaleString()} can reduce your tax while securing your health needs.`,
      potentialSavings,
      'high'
    );
  }
  
  // 4. Home Loan Interest
  if (data.homeLoanInterest < 200000 && data.homeLoanInterest > 0) {
    addStrategy(
      'Home Loan',
      'Optimize Home Loan Interest Deduction',
      'Consider prepaying part of your principal to increase the interest component for better tax benefits.',
      12000, // Rough estimate
      'medium'
    );
  }
  
  // 5. Regime selection strategy
  if (result.recommendedRegime === 'old') {
    addStrategy(
      'Regime Selection',
      'Stay with the Old Tax Regime',
      `Based on your financial profile, the old tax regime saves you ₹${result.totalSavings.toLocaleString()} compared to the new regime.`,
      result.totalSavings,
      'high'
    );
  } else {
    addStrategy(
      'Regime Selection',
      'Switch to the New Tax Regime',
      `Based on your financial profile, the new tax regime saves you ₹${result.totalSavings.toLocaleString()} compared to the old regime.`,
      result.totalSavings,
      'high'
    );
  }
  
  // 6. Rent strategy if HRA is available but not fully utilized
  if (data.hra > 0 && data.rent === 0) {
    const potentialRent = data.income * 0.2; // Rough estimate
    const potentialSavings = Math.min(potentialRent - (0.1 * data.income), data.hra) * 0.3;
    
    if (potentialSavings > 0) {
      addStrategy(
        'HRA',
        'Utilize HRA Tax Benefits',
        `Consider renting a house instead of staying in owned property to claim HRA exemption of approximately ₹${potentialSavings.toLocaleString()}.`,
        potentialSavings,
        'medium'
      );
    }
  }
  
  // Sort strategies by priority and potential savings
  return strategies.sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
    
    if (priorityDiff !== 0) return -priorityDiff;
    return b.potentialSavings - a.potentialSavings;
  });
};