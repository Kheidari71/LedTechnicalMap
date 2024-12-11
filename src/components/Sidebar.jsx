import React, { useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import DimensionItem from "./DimensionItem";
import ChoosableOptions from "./ChoosableOption";
import TextInputGroup from "./TextInputGroup";
import TextInput from "./TextInput";
import useExcelData from "../hook/formData";
import { useSheetDataStore } from "../zustand/sheetDataStore";
import useDescriptionDataStore from "../zustand/descriptionDataStore";

const Sidebar = ({ toPDF, targetRef }) => {
//hamburger menu
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // description form states
  const { formData, setFormData } = useDescriptionDataStore();
  
  // function to set changes in state
  const handleInputChange = (key, value) => {
    setFormData(key, value); // Update the global state
  };

  // sheetData state
  const { sheetData, loading, error } = useExcelData("/Db.xlsx");

  // sheetData info state
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

  // Getting data right when rendered
  useEffect(() => {
    if (sheetData) {
      setSelectedScreen(sheetData.sheet1[0]);
      setSelectedMediaPlayer(sheetData.sheet2[0]);
      setSelectedMount(sheetData.sheet3[0]);
      setSelectedReceptacleBox(sheetData.sheet4[0]);
    }
  }, [sheetData]);

  // Function to set default values for all fields
  const setCurrentValues = () => {
    setFormData("title", formData.title);
    setFormData("drawer", formData.drawer);
    setFormData("department", formData.department);
    setFormData("screenSize", formData.screenSize);
    setFormData("date", formData.date);
  };

  if (!selectedScreen) return null;

  return (
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
                    (q) => q["Screen MFR"] === e.target.value
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
                  sheetData.sheet2.find((q) => q["MFG. PART"] === e.target.value)
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
                  sheetData.sheet3.find((q) => q["MFG. PART"] === e.target.value)
                )
              }
            />
            <SelectInput
              className="text-center"
              label="Receptacle Box"
              value={selectedReceptacleBox?.["MFG. PART"] || ""}
              options={[
                { value: "", label: "Select option" },
                ...sheetData.sheet4.map((sh) => ({
                  value: sh["MFG. PART"],
                  label: sh["MFG. PART"],
                })),
              ]}
              onChange={(e) => {
                const selectedValue = e.target.value;
                if (selectedValue === "") {
                  setSelectedReceptacleBox(null);
                } else {
                  const selectedBox = sheetData.sheet4.find(
                    (q) => q["MFG. PART"] === selectedValue
                  );
                  setSelectedReceptacleBox(selectedBox);
                }
              }}
            />
            <div className="grid mt-2 grid-cols-1 px-5">
              <DimensionItem
                className="flex flex-row items-center justify-between border border-gray-300 h-8"
                label="Floor Distance"
                value="50"
              />
              <DimensionItem
                className="flex flex-row items-center justify-between border border-gray-300 h-8"
                label="Niche Depth var"
                value={variantDepth}
                onChange={(e) => setVarientDepth(e.target.value)}
              />
            </div>
            <div className="grid w-full grid-cols-2 px-5">
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
      <div className="w-full px-2">
        <div className="w-full border">
          <form className="grid grid-col grid-cols-1 text-start">
            <TextInputGroup title="Description">
              <TextInput
                label="Title"
                placeholder="Enter title"
                value={formData.title}
              
              />
              <TextInput
                label="Drawer"
                placeholder="Enter drawer name"
                value={formData.drawer}
                onChange={(e) => handleInputChange("drawer", e.target.value)}
              />
              <TextInput
                label="Department"
                placeholder="Enter department"
                value={formData.department}
                onChange={(e) => handleInputChange("department", e.target.value)}
              />
              <TextInput
                label="Screen Size"
                placeholder="Enter screen size"
                value={formData.screenSize}
                onChange={(e) => handleInputChange("screenSize", e.target.value)}
              />
              <TextInput
                label="Date"
                placeholder="Enter date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
              />
            </TextInputGroup>
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent default form submission
                setCurrentValues(); // Call function to set default values
              }}
              className="mb-1 mt-1 m-auto rounded-lg px-1 text-white w-4/5 bg-blue-500 hover:bg-blue-600 font-semibold border-2 border-transparent hover:border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Submit 
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                toPDF();
              }}
              className="mb-3 mt-1 m-auto rounded-lg px-1 text-white w-4/5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 font-semibold border-2 border-transparent hover:border-orange-600 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Download
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
