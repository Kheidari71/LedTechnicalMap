import React, { useEffect, useState } from "react"; // Import useState
import SelectInput from "./SelectInput";
import DimensionItem from "./DimensionItem";
import ChoosableOptions from "./ChoosableOption"; // Ensure you have this file
import TextInputGroup from "./TextInputGroup";
import TextInput from "./TextInput";
import useExcelData from "../hook/formData";
import { useSheetDataStore } from "../zustand/sheetDataStore";

const Sidebar = ({ toPDF, targetRef }) => {
  const { sheetData, loading, error } = useExcelData("/Db.xlsx");

  const {
    selectedScreen,
    selectedMediaPlayer,
    selectedMount,
    selectedReceptacleBox,
    setSelectedScreen,
    setSelectedMediaPlayer,
    setSelectedMount,
    setSelectedReceptacleBox,
    isHorizontal,
    isNiche,
    toggleIsHorizontal,
    toggleIsNiche,
    variantDepth,
    setVarientDepth
  } = useSheetDataStore((state) => state);

  useEffect(() => {
    if (sheetData) {
      setSelectedScreen(sheetData.sheet1[0]);
      setSelectedMediaPlayer(sheetData.sheet2[0]);
      setSelectedMount(sheetData.sheet3[0]);
      setSelectedReceptacleBox(sheetData.sheet4[0]);
    }
  }, [sheetData]);

  return selectedScreen ? (
    <div className="overflow-y-auto h-full fixed w-72 lg:right-0 -right-72 top-0 pt-14">
      <div className="w-full p-2">
        <div className="w-full border">
          <p className="pl-5 pt-4 text-start font-bold text-sm mb-1">
            Configuration
          </p>
          <form className="flex mt-1 flex-col items-center justify-around text-start pb-2">
            <SelectInput
              label="Screen"
              value={selectedScreen["Screen MFR"]}
              options={sheetData.sheet1.map((sh) => ({
                value: sh["Screen MFR"],
                label: sh["Screen MFR"],
              }))}
              onChange={(e) =>
                setSelectedScreen(
                  sheetData.sheet1.find(
                    (q) => q["Screen MFR"] == e.target.value
                  )
                )
              }
            />
            <SelectInput
              label="Media Player"
              value={selectedMediaPlayer["MFG. PART"]}
              options={sheetData.sheet2.map((sh) => ({
                value: sh["MFG. PART"],
                label: sh["MFG. PART"],
              }))}
              onChange={(e) =>
                setSelectedMediaPlayer(
                  sheetData.sheet2.find((q) => q["MFG. PART"] == e.target.value)
                )
              }
            />
            <SelectInput
              className="text-center"
              label="Mount"
              value={selectedMount["MFG. PART"]}
              options={sheetData.sheet3.map((sh) => ({
                value: sh["MFG. PART"],
                label: sh["MFG. PART"],
              }))}
              onChange={(e) =>
                setSelectedMount(
                  sheetData.sheet3.find((q) => q["MFG. PART"] == e.target.value)
                )
              }
            />
            <SelectInput
              className="text-center"
              label="Receptacle Box"
              value={selectedReceptacleBox ? selectedReceptacleBox["MFG. PART"] : ""}
              options={[
                { value: "", label: "Select option" },
                ...sheetData.sheet4.map((sh) => ({
                  value: sh["MFG. PART"],
                  label: sh["MFG. PART"],
                })),
              ]}
              onChange={(e) =>
                setSelectedReceptacleBox(
                  sheetData.sheet4.find((q) => q["MFG. PART"] == e.target.value)
                )
              }
            />
            <div className="grid mt-2 grid-cols-1 px-5 ">
              <DimensionItem
                className="flex flex-row items-center justify-between border border-gray-300 h-8"
                label="Floor Distance"
                value="28"
              />
              <DimensionItem
                className="flex flex-row items-center justify-between border border-gray-300 h-8"
                label="Niche Depth var"
                value={variantDepth}
                
                onChange={e=>setVarientDepth(e.target.value)}
              />
            </div>
            <div className="grid w-full grid-cols-2 px-5  ">
              <ChoosableOptions
                label="Vertical"
                isSelected={!isHorizontal}
                onSelect={() => toggleIsHorizontal()}
              />
              <ChoosableOptions
                label="Horizontal"
                isSelected={isHorizontal}
                onSelect={() => toggleIsHorizontal()}
              />
              <ChoosableOptions
                label="Niche"
                isSelected={isNiche}
                onSelect={() => toggleIsNiche()}
              />
              <ChoosableOptions
                label="Flat Wall"
                isSelected={!isNiche}
                onSelect={() => toggleIsNiche()}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="w-full px-2 ">
        <div className="w-full border">
          <form className="grid grid-col grid-cols-1 text-start ">
            <TextInputGroup title="Description">
              <TextInput label="Title" placeholder="Enter title" />
              <TextInput label="Drawer" placeholder="Enter drawer name" />
              <TextInput label="Department" placeholder="Enter department" />
              <TextInput label="Screen Size" placeholder="Enter screen size" />
              <TextInput label="Date" placeholder="Enter date" />
            </TextInputGroup>
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent the default form submission
                toPDF(); // Call your toPDF function to trigger the PDF download
              }}
              className="mb-3 py-1 mt-1 m-auto  rounded-lg px-1 text-white w-4/5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 font-semibold border-2 border-transparent hover:border-orange-600 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Download
            </button>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default Sidebar;
