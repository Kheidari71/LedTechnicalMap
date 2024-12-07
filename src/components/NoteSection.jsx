import React from "react";

const NotesSection = () => {
  return (
 
    <div className="text-start border border-gray-300 rounded-sm p-2  mb-1 shadow-sm">
      {/* Title */}
      <h3 className="text-base font-semibold text-gray-700 ">
        Notes
      </h3>

      {/* Text Description */}
      <p className="text-gray-600 text-sm ">
        Install recessed receptacle box with:
      </p>
      <ul className="text-gray-600 text-sm mb-6 space-y-1">
        <li>2x Terminated Power Outlets</li>
        <li>1x Terminated Data CAT5 Ethernet Outlet</li>
      </ul>

      {/* Dimensions Section */}
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col items-center w-[30%] border-2 border-gray-300 rounded-md p-2">
          <span className="text-gray-700 text-sm mb-1">Height</span>
          <input
            type="text"
            value="6.6”"
            className="border-none bg-gray-100 text-center rounded-md w-full py-1 focus:outline-none"
            readOnly
          />
        </div>
        <div className="flex flex-col items-center w-[30%] border-2 border-gray-300 rounded-md p-2">
          <span className="text-gray-700 text-sm mb-1">Width</span>
          <input
            type="text"
            value="6.012”"
            className="border-none bg-gray-100 text-center rounded-md w-full py-1 focus:outline-none"
            readOnly
          />
        </div>
        <div className="flex flex-col items-center w-[30%] border-2 border-gray-300 rounded-md p-2">
          <span className="text-gray-700 text-sm mb-1">Depth</span>
          <input
            type="text"
            value="3.75”"
            className="border-none bg-gray-100 text-center rounded-md w-full py-1 focus:outline-none"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default NotesSection;
