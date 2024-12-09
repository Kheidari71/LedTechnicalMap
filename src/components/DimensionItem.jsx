import React from "react";

const DimensionItem = ({ label, value ,className }) => {
  return (
    <div className={`flex items-center text-center  ${className}`}>
        <div className="flex justify-center bg-gray-400 text-center w-1/2 items-center h-full ">
      <span className=" text-white   text-sm ">{label}</span>
      </div>
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