import React from "react";

const DimensionGroup = ({ title, children }) => {
  return (
    <div className="border border-gray-300 rounded-md p-6 bg-gray-50 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default DimensionGroup;
