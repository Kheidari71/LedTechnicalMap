import React from "react";
import DimensionGroup from "./DimensionGroup";
import DimensionItem from "./DimensionItem";
import NotesSection from "./NoteSection";

const DimensionBoxes = () => {
  return (
    <div className="w-full h-auto p-4  bg-white border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        Dimensions
      </h2>

      <div className="flex flex-cols  gap-4 justify-center">
        {/* Niche Dimensions */}
        
        <DimensionGroup title="Niche Dimensions">
          <DimensionItem label="Height" value="30.5" className="flex flex-row items-center justify-between border border-gray-300 h-8"/>
          <DimensionItem label="Width" value="51" className="flex flex-row items-center justify-between border border-gray-300 h-8"/>
          <DimensionItem label="Depth" value="3.7" className="flex flex-row items-center justify-between border border-gray-300 h-8"/>
        </DimensionGroup>

        {/* Screen Dimensions */}
        <DimensionGroup title="Screen Dimensions">
          <DimensionItem label="Height" value="28" className="flex flex-row items-center justify-between border border-gray-300 h-8"/>
          <DimensionItem label="Width" value="48.50" className="flex flex-row items-center justify-between border border-gray-300 h-8"/>
          <DimensionItem label="Depth" value="50" className="flex flex-row items-center justify-between border border-gray-300 h-8"/>
        </DimensionGroup>
      
      </div>
 <div className="w-full top-14 pt-20">
 <NotesSection/>
 </div>
 <div className="w-full top-14 pt-20">
 <NotesSection/>
 </div>
      
    
    </div>
  );
};

export default DimensionBoxes;
