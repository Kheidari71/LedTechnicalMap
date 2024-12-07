import React from 'react';

const SelectInput = ({label , options}) => {
    return (
        <div className="mb-2">
        <label className="dark:bg-transparent dark:text-gray-300 block text-sm text-card&table mb-2">
          {label}
        </label>
        <select>

         {options.map((option , index)=>(
            <option key= {index} value={option.value}>{option.label}</option>
         ))}
          
          {/* Add other status options here */}
        </select>
      </div>
    );
}

export default SelectInput;
