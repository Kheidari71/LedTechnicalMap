import React from 'react';

const SelectInput = ({ label, options }) => {
  return (
    <div className="mb-1">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative">
        <select
          className="w-full border border-gray-300 dark:border-gray-700 rounded-sm px-8 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none hover:border-blue-400 transition-all duration-200 ease-in-out"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
