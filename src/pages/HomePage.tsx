import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, ShieldCheck } from 'lucide-react';
import Layout from '../components/common/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Smart Tax Planning with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">AI Insights</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Calculate your income tax and get personalized AI-powered strategies to maximize your savings.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/calculator" 
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none transition-all duration-200"
                  >
                    Start Tax Checkup
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/about" 
                    className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium rounded-lg shadow-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-full filter blur-3xl opacity-60 z-0"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-teal-200 dark:bg-teal-900/30 rounded-full filter blur-3xl opacity-60 z-0"></div>
                <div className="relative z-10 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tax Insights Preview</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <p className="text-gray-700 dark:text-gray-300">Annual Income: ₹12,00,000</p>
                      <div className="mt-2 flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Old Regime Tax:</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">₹1,17,000</span>
                      </div>
                      <div className="mt-1 flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">New Regime Tax:</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">₹85,800</span>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                      <p className="text-green-700 dark:text-green-300 font-medium">Recommended Strategy</p>
                      <p className="mt-1 text-gray-700 dark:text-gray-300">Invest ₹50,000 in NPS to save ₹15,000 in taxes</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Use Pie Money?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge platform combines tax expertise with AI to deliver personalized insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Accurate Calculations</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get precise tax calculations for both old and new regimes with a detailed breakdown of your taxable income.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI-Powered Strategies</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive personalized tax-saving recommendations based on your financial profile and income structure.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Privacy Focused</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your financial data stays in your browser. We never store or share your sensitive information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your Taxes?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Take control of your tax planning with personalized insights and recommendations.
              </p>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link 
                  to="/calculator" 
                  className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none transition-all duration-200"
                >
                  Get Started Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;