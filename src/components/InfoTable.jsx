import React from "react";

const InfoTable = () => {
  return (
    <div className="border rounded-md shadow-md p-4 bg-white w-full max-w-4xl mx-auto">
      {/* Logo and Address */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <img
            src="/path/to/logo.png"
            alt="Signcast Media"
            className="h-12"
          />
        </div>
        <div className="text-right">
          <p className="font-medium text-gray-700">361 Steelcase RD. W, #1</p>
          <p className="font-medium text-gray-700">MARKHAM, ONTARIO</p>
          <p className="font-medium text-gray-700">Phone: (416) 900-2233</p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <p className="font-semibold text-gray-800">Description:</p>
        <p className="text-gray-600">Horizontal + PC In Niche</p>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-yellow-100 px-2 py-1">Drawn</th>
            <th className="border border-gray-300 bg-yellow-100 px-2 py-1">Dimensions In Inches</th>
            <th className="border border-gray-300 bg-yellow-100 px-2 py-1">Screen Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-2 py-1">SignCast</td>
            <td className="border border-gray-300 px-2 py-1 text-center">
              <img
                src="/path/to/dimension-icon.png"
                alt="Dimension Icon"
                className="h-8 mx-auto"
              />
            </td>
            <td className="border border-gray-300 px-2 py-1">LG 55" Touch Display</td>
          </tr>
        </tbody>
      </table>

      <table className="w-full border-collapse border border-gray-300 mt-4 text-sm">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-yellow-100 px-2 py-1">Date</th>
            <th className="border border-gray-300 bg-yellow-100 px-2 py-1">Sheet</th>
            <th className="border border-gray-300 bg-yellow-100 px-2 py-1">Revision</th>
            <th className="border border-gray-300 bg-yellow-100 px-2 py-1">Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-2 py-1">09/12/2023</td>
            <td className="border border-gray-300 px-2 py-1">1 of 1</td>
            <td className="border border-gray-300 px-2 py-1">00</td>
            <td className="border border-gray-300 px-2 py-1">Installations</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;