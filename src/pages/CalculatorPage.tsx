import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/common/Layout';
import TaxForm from '../components/tax/TaxForm';
import TaxResults from '../components/tax/TaxResults';
import Strategies from '../components/tax/Strategies';
import { useTax } from '../context/TaxContext';

const CalculatorPage: React.FC = () => {
  const { taxResult, resetCalculation } = useTax();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI Tax Calculator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enter your financial details to get an accurate tax calculation and personalized tax-saving strategies.
          </p>
        </motion.div>

        {taxResult && (
          <div className="mb-6 flex justify-center">
            <motion.button
              className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white flex items-center space-x-1 focus:outline-none"
              onClick={resetCalculation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Start New Calculation</span>
            </motion.button>
          </div>
        )}

        <TaxForm />
        <TaxResults />
        <Strategies />
      </div>
    </Layout>
  );
};

export default CalculatorPage;