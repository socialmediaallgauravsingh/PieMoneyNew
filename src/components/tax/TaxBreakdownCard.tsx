import React from 'react';
import { motion } from 'framer-motion';
import { TaxBreakdownCardProps } from '../../types';
import { CheckCircle } from 'lucide-react';

const TaxBreakdownCard: React.FC<TaxBreakdownCardProps> = ({ result, regime, isRecommended }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: regime === 'old' ? 0.2 : 0.4 }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
        isRecommended ? 'border-2 border-green-500 dark:border-green-400' : 'border border-gray-200 dark:border-gray-700'
      }`}
    >
      <div className={`py-4 px-6 flex justify-between items-center ${
        regime === 'old' ? 'bg-blue-50 dark:bg-blue-900/30' : 'bg-teal-50 dark:bg-teal-900/30'
      }`}>
        <h3 className={`text-lg font-semibold ${
          regime === 'old' ? 'text-blue-700 dark:text-blue-300' : 'text-teal-700 dark:text-teal-300'
        }`}>
          {regime === 'old' ? 'Old Regime' : 'New Regime'}
        </h3>
        {isRecommended && (
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-1" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400">Recommended</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Taxable Income</p>
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">{formatCurrency(result.taxableIncome)}</p>
        </div>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Tax Amount</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{formatCurrency(result.taxAmount)}</p>
        </div>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Effective Tax Rate</p>
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">{result.effectiveTaxRate.toFixed(2)}%</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Tax Breakdown</p>
          {result.breakup.map((slab, index) => (
            <div key={index} className="mb-2 last:mb-0">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  {formatCurrency(slab.slabFrom)} - {slab.slabTo ? formatCurrency(slab.slabTo) : 'Above'}
                  <span className="text-gray-500 dark:text-gray-500"> @ {(slab.rate * 100).toFixed(0)}%</span>
                </span>
                <span className="font-medium text-gray-800 dark:text-gray-200">{formatCurrency(slab.taxAmount)}</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(slab.taxAmount / result.taxAmount) * 100}%` }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className={`h-full rounded-full ${
                    regime === 'old' ? 'bg-blue-500 dark:bg-blue-400' : 'bg-teal-500 dark:bg-teal-400'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TaxBreakdownCard;