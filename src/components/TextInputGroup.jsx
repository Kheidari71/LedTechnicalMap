import React from 'react';

const TextInputGroup = ({title , children}) => {
    return (
        <div className="w-full px-4 py-2 bg-white dark:bg-gray-800">
          <p className="font-bold text-sm mb-1 text-gray-800 dark:text-gray-200">{title}</p>
          {children}
        </div>
      );
}

export default TextInputGroup;
