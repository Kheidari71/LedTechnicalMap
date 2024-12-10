import React from "react";
import DimensionGroup from "./DimensionGroup";
import DimensionItem from "./DimensionItem";
import NotesSection from "./NoteSection";
import SignCastForm from "./SignCastForm";
import TextInputGroup from "./TextInputGroup";
import TextInput from "./TextInput";
import NoteSection from "./NoteSection";
import FormTable from "./InfoTable";
import InfoTable from "./InfoTable";
import { useSheetDataStore } from "../zustand/sheetDataStore";
import {findMax} from "../utils/numberUtils"
const DimensionBoxes = () => {
  const {
    selectedScreen,
    selectedReceptacleBox,
    selectedMediaPlayer,
    selectedMount,
    variantDepth
  } = useSheetDataStore((state) => state);

  const nicheDepth = parseFloat(selectedScreen?.Depth || 0)+ parseFloat(findMax((selectedMediaPlayer?.Depth || 0) , (selectedMount ? selectedMount["Depth (in)"] : 0))) + parseFloat(variantDepth || 0);


  
  // The formula for calculating niche depth is: Screen depth + Max(Media player depth, Mount depth) + Depth variance
  console.log(selectedScreen);

  // The gap between outer box (niche) and screen varies: For screens under 55″: 1.5″ on each side / For screens over 55″: 2″ on each side. We recommend adding an input field to let users adjust this value.
  // The formula for calculating niche depth is: Screen depth + Max(Media player depth, Mount depth) + Depth variance
  return selectedScreen ? (
    <div className="w-full h-auto p-2  bg-white border-gray-200">
      <h2 className="text-md font-semibold text-gray-800 mb-6 text-center">
        Dimensions
      </h2>

      <div className="flex flex-cols  gap-4 justify-center">
        {/* Niche Dimensions */}

        <DimensionGroup title="Niche Dimensions">
          <DimensionItem
            label="Height"
            value={
              selectedScreen["Height"]
                ? (parseFloat(selectedScreen["Height"]) + 1.5).toFixed(2)
                : 0
            }
            className="items-center text-center justify-between border border-gray-300 h-8"
          />
          <DimensionItem
            label="Width"
            value={
              selectedScreen["Width"]
                ? (parseFloat(selectedScreen["Width"]) + 1.5).toFixed(2)
                : 0
            }
            className="flex flex-row items-center justify-between border border-gray 300 h-8"
          />
          <DimensionItem
            label="Depth"
            value={
             nicheDepth
            }
            className="flex flex-row items-center justify-between border border-gray-300 h-8"
          />
        </DimensionGroup>

        {/* Screen Dimensions */}
        <DimensionGroup title="Screen Dimensions">
          <DimensionItem
            label="Height"
            value={selectedScreen["Height"] || 0}
            className="flex flex-row items-center justify-between border border-gray-300 h-8"
          />
          <DimensionItem
            label="Width"
            value={selectedScreen["Width"] || 0}
            className="flex flex-row items-center justify-between border border-gray-300 h-8"
          />
          <DimensionItem
            label="Depth"
            value={selectedScreen["Depth"] || 0}
            className="flex flex-row items-center justify-between border border-gray-300 h-8"
          />
        </DimensionGroup>
      </div>
      <div className="w-full pt-24">
        <NoteSection />
      </div>
      <div className="w-full">
        <InfoTable />
      </div>
    </div>
  ) : null;
};

export default DimensionBoxes;
