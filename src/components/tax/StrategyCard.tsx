import React from 'react';
import { motion } from 'framer-motion';
import { StrategyCardProps } from '../../types';
import TypingText from '../ui/TypingText';
import { TrendingUp, AlertTriangle, Info } from 'lucide-react';

const StrategyCard: React.FC<StrategyCardProps> = ({ strategy, index }) => {
  const priorityIcon = {
    high: <TrendingUp className="w-5 h-5 text-green-500 dark:text-green-400" />,
    medium: <Info className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
    low: <AlertTriangle className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
  };
  
  const priorityClass = {
    high: 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800',
    medium: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800',
    low: 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800'
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className={`border rounded-lg overflow-hidden ${priorityClass[strategy.priority]}`}
    >
      <div className="p-4">
        <div className="flex items-center mb-3">
          {priorityIcon[strategy.priority]}
          <h3 className="ml-2 font-semibold text-gray-800 dark:text-gray-100">{strategy.title}</h3>
        </div>
        
        <TypingText
          text={strategy.description}
          className="text-gray-600 dark:text-gray-300 mb-3"
          delay={20}
        />
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">Potential Savings</span>
          <span className="font-bold text-lg text-gray-900 dark:text-white">
            {formatCurrency(strategy.potentialSavings)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default StrategyCard;