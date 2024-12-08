import React from "react";

const DimensionItem = ({ label, value ,className }) => {
  return (
    <div className={className}>
      <span className="text-gray-700 pt-1 bg-gray-100 w-1/2 h-7 text-center items-center text-sm m-auto">{label}</span>
      <input
        type="text"
        value={value}
        className="  text-center h-7 w-1/2  focus:outline-none focus:ring-2  focus:ring-blue-400"
        readOnly
      />
    </div>
  );
};

export default DimensionItem;