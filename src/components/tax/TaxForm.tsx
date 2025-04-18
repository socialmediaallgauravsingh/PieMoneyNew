import React from 'react';
import { motion } from 'framer-motion';
import FormField from '../ui/FormField';
import { useTax } from '../../context/TaxContext';

const TaxForm: React.FC = () => {
  const { formData, updateFormData, calculateTaxes, isCalculating } = useTax();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: parseFloat(value) || 0 });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateTaxes();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Enter Your Financial Details</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <FormField
            label="Annual Income"
            name="income"
            value={formData.income}
            onChange={handleChange}
            tooltip="Your total annual income before any deductions"
          />
          
          <FormField
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            prefix=""
            tooltip="Your age as of the assessment year"
          />
          
          <FormField
            label="Monthly Rent Paid"
            name="rent"
            value={formData.rent}
            onChange={handleChange}
            tooltip="Monthly rent amount if you live in a rented accommodation"
          />
          
          <FormField
            label="HRA Received"
            name="hra"
            value={formData.hra}
            onChange={handleChange}
            tooltip="Annual House Rent Allowance received from employer"
          />
          
          <FormField
            label="Home Loan Interest"
            name="homeLoanInterest"
            value={formData.homeLoanInterest}
            onChange={handleChange}
            tooltip="Annual interest paid on home loan (up to ₹2,00,000 deduction)"
          />
          
          <FormField
            label="Section 80C Investments"
            name="section80C"
            value={formData.section80C}
            onChange={handleChange}
            tooltip="Total investments in ELSS, PPF, EPF, etc. (up to ₹1,50,000 deduction)"
          />
          
          <FormField
            label="Health Insurance Premium (80D)"
            name="section80D"
            value={formData.section80D}
            onChange={handleChange}
            tooltip="Annual health insurance premium paid for self and family"
          />
          
          <FormField
            label="NPS Contribution"
            name="nps"
            value={formData.nps}
            onChange={handleChange}
            tooltip="Annual contribution to National Pension System (additional ₹50,000 deduction)"
          />
          
          <FormField
            label="Other Deductions"
            name="otherDeductions"
            value={formData.otherDeductions}
            onChange={handleChange}
            tooltip="Other tax-saving deductions such as 80E, 80G, etc."
          />
        </div>
        
        <div className="mt-8 flex justify-center">
          <motion.button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isCalculating || formData.income <= 0}
          >
            {isCalculating ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Calculating...
              </div>
            ) : (
              "Calculate My Tax"
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default TaxForm;