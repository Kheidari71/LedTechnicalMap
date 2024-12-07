import React from "react";

const DimensionItem = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center border-2 border-gray-300 rounded-md p-3">
      <span className="text-gray-700 text-sm mb-1">{label}</span>
      <input
        type="text"
        value={value}
        className="border-none bg-gray-100 text-center rounded-md w-full py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        readOnly
      />
    </div>
  );
};

export default DimensionItem;