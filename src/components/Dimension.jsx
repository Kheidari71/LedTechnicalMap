import React from "react";
import DimensionGroup from "./DimensionGroup";
import DimensionItem from "./DimensionItem";

const DimensionBoxes = () => {
  return (
    <div className="w-full h-auto p-4 lg:p-8 bg-white border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        Dimensions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Niche Dimensions */}
        <DimensionGroup title="Niche Dimensions">
          <DimensionItem label="Height" value="30.5" />
          <DimensionItem label="Width" value="51" />
          <DimensionItem label="Depth" value="3.7" />
        </DimensionGroup>

        {/* Screen Dimensions */}
        <DimensionGroup title="Screen Dimensions">
          <DimensionItem label="Height" value="28" />
          <DimensionItem label="Width" value="48.50" />
          <DimensionItem label="Depth" value="50" />
        </DimensionGroup>
      </div>
    </div>
  );
};

export default DimensionBoxes;
