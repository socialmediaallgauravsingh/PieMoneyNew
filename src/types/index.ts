// Tax form data types
export interface TaxFormData {
  income: number;
  age: number;
  rent: number;
  hra: number;
  homeLoanInterest: number;
  section80C: number;
  section80D: number;
  nps: number;
  otherDeductions: number;
}

// Tax calculation result types
export interface TaxRegimeResult {
  taxableIncome: number;
  taxAmount: number;
  effectiveTaxRate: number;
  breakup: TaxSlabBreakup[];
}

export interface TaxSlabBreakup {
  slabFrom: number;
  slabTo: number | null;
  rate: number;
  taxAmount: number;
}

export interface TaxCalculationResult {
  oldRegime: TaxRegimeResult;
  newRegime: TaxRegimeResult;
  recommendedRegime: 'old' | 'new';
  totalSavings: number;
}

// Tax saving strategy types
export interface TaxSavingStrategy {
  id: string;
  category: string;
  title: string;
  description: string;
  potentialSavings: number;
  priority: 'high' | 'medium' | 'low';
}

// Component props types
export interface TypingTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export interface FormFieldProps {
  label: string;
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  tooltip?: string;
  prefix?: string;
  step?: number;
}

export interface TaxBreakdownCardProps {
  result: TaxRegimeResult;
  regime: 'old' | 'new';
  isRecommended: boolean;
}

export interface StrategyCardProps {
  strategy: TaxSavingStrategy;
  index: number;
}