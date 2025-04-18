import React from 'react';
import { motion } from 'framer-motion';
import { useTax } from '../../context/TaxContext';
import TaxBreakdownCard from './TaxBreakdownCard';
import TypingText from '../ui/TypingText';

const TaxResults: React.FC = () => {
  const { taxResult } = useTax();

  if (!taxResult) return null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-8"
    >
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Your Tax Analysis</h2>
        <div className="inline-block bg-green-50 dark:bg-green-900/30 px-5 py-3 rounded-lg">
          <TypingText
            text={`I've analyzed your tax situation. Based on your inputs, the ${
              taxResult.recommendedRegime === 'old' ? 'Old' : 'New'
            } Regime is better for you, saving approximately ${formatCurrency(taxResult.totalSavings)}.`}
            className="text-green-700 dark:text-green-300 font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TaxBreakdownCard
          result={taxResult.oldRegime}
          regime="old"
          isRecommended={taxResult.recommendedRegime === 'old'}
        />
        <TaxBreakdownCard
          result={taxResult.newRegime}
          regime="new"
          isRecommended={taxResult.recommendedRegime === 'new'}
        />
      </div>
    </motion.div>
  );
};

export default TaxResults;