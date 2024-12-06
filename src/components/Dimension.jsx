import React from "react";

const DimensionBoxes = () => {
    return (
        <div className="flex flex-rol md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-8 p-8">
            {/* Niche Dimensions */}
            <div className="border-2 border-gray-300 rounded-lg shadow-lg p-6 bg-white w-full max-w-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Niche Dimensions:
                </h2>
                <div className="space-y-4">
                    {/* Height */}
                    <div className="flex flex-col items-center border-2 border-gray-300 rounded-md p-3">
                        <span className="text-gray-700 font-medium mb-1">Height</span>
                        <input
                            type="text"
                            value="30.5"
                            className="border-none bg-gray-100 text-center rounded-md w-full py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            readOnly
                        />
                    </div>
                    {/* Width */}
                    <div className="flex flex-col items-center border-2 border-gray-300 rounded-md p-3">
                        <span className="text-gray-700 font-medium mb-1">Width</span>
                        <input
                            type="text"
                            value="51"
                            className="border-none bg-gray-100 text-center rounded-md w-full py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            readOnly
                        />
                    </div>
                    {/* Depth */}
                    <div className="flex flex-col items-center border-2 border-gray-300 rounded-md p-3">
                        <span className="text-gray-700 font-medium mb-1">Depth</span>
                        <input
                            type="text"
                            value="3.7"
                            className="border-none bg-gray-100 text-center rounded-md w-full py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            readOnly
                        />
                    </div>
                </div>
            </div>

            {/* Screen Dimensions */}
            <div className="border-2 border-gray-300 rounded-lg shadow-lg p-6 bg-white w-full max-w-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Screen Dimensions:
                </h2>
                <div className="space-y-4">
                    {/* Height */}
                    <div className="flex flex-col items-center border-2 border-gray-300 rounded-md p-3">
                        <span className="text-gray-700 font-medium mb-1">Height</span>
                        <input
                            type="text"
                            value="28"
                            className="border-none bg-gray-100 text-center rounded-md w-full py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            readOnly
                        />
                    </div>
                    {/* Width */}
                    <div className="flex flex-col items-center border-2 border-gray-300 rounded-md p-3">
                        <span className="text-gray-700 font-medium mb-1">Width</span>
                        <input
                            type="text"
                            value="48.50"
                            className="border-none bg-gray-100 text-center rounded-md w-full py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            readOnly
                        />
                    </div>
                    {/* Floor Line */}
                    <div className="flex flex-col items-center border-2 border-gray-300 rounded-md p-3">
                        <span className="text-gray-700 font-medium mb-1">Floor Line</span>
                        <input
                            type="text"
                            value="50"
                            className="border-none bg-gray-100 text-center rounded-md w-full py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DimensionBoxes;
