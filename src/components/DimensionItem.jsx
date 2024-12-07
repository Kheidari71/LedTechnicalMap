import React from "react";

const DimensionItem = ({ label, value ,className }) => {
  return (
    <div className={className}>
      <span className="text-gray-700 text-sm mb-1">{label}</span>
      <input
        type="text"
        value={value}
        className="border-none bg-gray-100 text-center rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-blue-400"
        readOnly
      />
    </div>
  );
};

export default DimensionItem;