import React, { createContext, useContext, useState } from 'react';
import { calculateTax } from '../utils/taxCalculator';
import { generateTaxStrategies } from '../utils/strategyGenerator';
import { TaxFormData, TaxCalculationResult, TaxSavingStrategy } from '../types';

interface TaxContextType {
  formData: TaxFormData;
  taxResult: TaxCalculationResult | null;
  strategies: TaxSavingStrategy[];
  updateFormData: (data: Partial<TaxFormData>) => void;
  calculateTaxes: () => void;
  resetCalculation: () => void;
  isCalculating: boolean;
  isGeneratingStrategies: boolean;
}

const initialFormData: TaxFormData = {
  income: 0,
  age: 30,
  rent: 0,
  hra: 0,
  homeLoanInterest: 0,
  section80C: 0,
  section80D: 0,
  nps: 0,
  otherDeductions: 0,
};

const TaxContext = createContext<TaxContextType | undefined>(undefined);

export const TaxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<TaxFormData>(initialFormData);
  const [taxResult, setTaxResult] = useState<TaxCalculationResult | null>(null);
  const [strategies, setStrategies] = useState<TaxSavingStrategy[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isGeneratingStrategies, setIsGeneratingStrategies] = useState(false);

  const updateFormData = (data: Partial<TaxFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const calculateTaxes = async () => {
    setIsCalculating(true);
    setTaxResult(null);
    setStrategies([]);
    
    // Simulate API call delay
    setTimeout(() => {
      const result = calculateTax(formData);
      setTaxResult(result);
      setIsCalculating(false);
      
      // Generate strategies after tax calculation
      setIsGeneratingStrategies(true);
      setTimeout(() => {
        const taxStrategies = generateTaxStrategies(formData, result);
        setStrategies(taxStrategies);
        setIsGeneratingStrategies(false);
      }, 1500);
    }, 1000);
  };

  const resetCalculation = () => {
    setFormData(initialFormData);
    setTaxResult(null);
    setStrategies([]);
  };

  return (
    <TaxContext.Provider
      value={{
        formData,
        taxResult,
        strategies,
        updateFormData,
        calculateTaxes,
        resetCalculation,
        isCalculating,
        isGeneratingStrategies
      }}
    >
      {children}
    </TaxContext.Provider>
  );
};

export const useTax = (): TaxContextType => {
  const context = useContext(TaxContext);
  if (context === undefined) {
    throw new Error('useTax must be used within a TaxProvider');
  }
  return context;
};