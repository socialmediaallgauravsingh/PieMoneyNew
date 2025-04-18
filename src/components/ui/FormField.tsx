import React from 'react';
import { FormFieldProps } from '../../types';
import { Info } from 'lucide-react';
import { motion } from 'framer-motion';

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  min = 0,
  max,
  tooltip,
  prefix = '₹',
  step = 1
}) => {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-1">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
        {tooltip && (
          <div className="relative group ml-1">
            <Info className="w-4 h-4 text-gray-400" />
            <motion.div 
              className="absolute z-10 invisible group-hover:visible bg-white dark:bg-gray-800 p-2 rounded shadow-lg text-xs w-48 text-gray-700 dark:text-gray-300 transform -translate-x-1/2 left-1/2 bottom-full mb-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {tooltip}
              <div className="absolute h-2 w-2 bg-white dark:bg-gray-800 transform rotate-45 -translate-x-1/2 left-1/2 -bottom-1"></div>
            </motion.div>
          </div>
        )}
      </div>
      <div className="relative">
        {prefix && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 dark:text-gray-400 sm:text-sm">{prefix}</span>
          </div>
        )}
        <input
          type="number"
          id={name}
          name={name}
          value={value || ''}
          onChange={onChange}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          className={`block w-full ${prefix ? 'pl-7' : 'pl-3'} pr-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
        />
      </div>
    </div>
  );
};

export default FormField;