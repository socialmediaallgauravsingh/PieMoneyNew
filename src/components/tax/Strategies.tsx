import React from 'react';
import { motion } from 'framer-motion';
import { useTax } from '../../context/TaxContext';
import StrategyCard from './StrategyCard';
import TypingText from '../ui/TypingText';
import { Lightbulb } from 'lucide-react';

const Strategies: React.FC = () => {
  const { strategies, isGeneratingStrategies } = useTax();

  if (isGeneratingStrategies) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg">
          <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-gray-600 dark:text-gray-300">Analyzing your data for tax-saving strategies...</span>
        </div>
      </motion.div>
    );
  }

  if (strategies.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-12"
    >
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 mb-4">
          <Lightbulb className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
        </div>
        <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">Personalized Tax Saving Strategies</h2>
        <TypingText
          text="Based on your financial profile, I've identified several opportunities to optimize your tax situation. Here are my recommendations:"
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strategies.map((strategy, index) => (
          <StrategyCard key={strategy.id} strategy={strategy} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Strategies;