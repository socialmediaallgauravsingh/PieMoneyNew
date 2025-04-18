import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/common/Layout';
import { Link } from 'react-router-dom';
import { BarChart, FileText, Shield, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Pie Money
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your AI-powered tax assistant for optimizing savings and financial planning.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              TaxAI was created with a simple mission: to demystify tax calculations and help individuals optimize their tax savings through personalized strategies.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We believe that everyone should have access to intelligent tax planning tools that were previously available only to those who could afford expensive financial advisors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Advanced Tax Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our platform uses complex tax calculation algorithms to accurately determine your tax liability under both old and new regimes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                AI-Powered Recommendations
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We analyze your financial profile to generate personalized tax-saving strategies that maximize your benefits.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Privacy First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your financial data never leaves your browser. We use client-side calculations to ensure your sensitive information remains private.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Educational Resources
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We aim to educate users about tax laws and savings opportunities through clear explanations and transparent calculations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="px-8 py-10 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Taxes?</h2>
              <p className="text-white/90 mb-6">
                Get started with our AI-powered tax calculator and discover personalized strategies to save money.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  to="/calculator"
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none transition-all duration-200"
                >
                  Try the Calculator
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;