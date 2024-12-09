import React, { useState } from 'react'; // Import useState
import SelectInput from './SelectInput';
import DimensionItem from './DimensionItem';
import ChoosableOptions from './ChoosableOption'; // Ensure you have this file
import TextInputGroup from './TextInputGroup';
import TextInput from './TextInput';

const Sidebar = () => {
    const [IsVertical, setIsVertical] = useState(null); // State to track selected option

    // Handle selection
    const handleSelectDirection = (option) => {
        setIsVertical(option);
    };
    const [IsNiche, setIsNiche] = useState(null); // State to track selected option

    // Handle selection
    const handleSelectDimention = (option) => {
        setIsNiche(option);
    };

    return (
        <div className=' h-full fixed w-72 lg:right-0 -right-72 top-0 pt-14'>
            <div className='w-full p-2'>
                <div className='w-full border'>
                    <p className='pl-5 pt-4 text-start font-bold text-sm mb-1'>Configuration</p>
                    <form className='flex mt-1 flex-col items-center justify-around text-start pb-2'>

                        <SelectInput
                            label="Screen"
                            options={[
                                { value: "On all product", label: "On All product" },
                                { value: "On some of the product", label: "On Some of the product" }
                            ]}
                        />
                        <SelectInput
                            label="Media Player"
                            options={[
                                { value: "On all product", label: "On All product" },
                                { value: "On some of the product", label: "On Some of the product" }
                            ]}
                        />
                        <SelectInput
                            className="text-center"
                            label="Mount"
                            options={[
                                { value: "On all product", label: "On All product" },
                                { value: "On some of the product", label: "On Some of the product" }
                            ]}
                        />
                        <SelectInput
                            label="Receptacle Box"
                            options={[
                                { value: "On all product", label: "On All product" },
                                { value: "On some of the product", label: "On Some of the product" }
                            ]}
                        />
                        <div className='grid mt-2 grid-cols-1 px-5 '>
                            <DimensionItem
                                className="flex flex-row items-center justify-between border border-gray-300 h-8"
                                label="Floor Distance" value="28"
                            />
                            <DimensionItem
                                className="flex flex-row items-center justify-between border border-gray-300 h-8"
                                label="Niche Depth var" value="28"
                            />
                        </div>
                        <div className='grid w-full grid-cols-2 px-5  '>
                            <ChoosableOptions
                                label="Vertical"
                                isSelected={IsVertical === "Vertical"}
                                onSelect={() => handleSelectDirection("Vertical")}
                            />
                            <ChoosableOptions
                                label="Horizontal"
                                isSelected={IsVertical === "Horizontal"}
                                onSelect={() => handleSelectDirection("Horizontal")}
                            />
                            <ChoosableOptions
                                label="Niche"
                                isSelected={IsNiche === "Niche"}
                                onSelect={() => handleSelectDimention("Niche")}
                            />
                            <ChoosableOptions
                                label="Flat Wall"
                                isSelected={IsNiche === "Flat Wall"}
                                onSelect={() => handleSelectDimention("Flat Wall")}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className='w-full h-full px-2 '>
                <div className='w-full border'>
                    <form className='grid grid-col grid-cols-1 text-start '>

                        <TextInputGroup title="Description">
                            <TextInput label="Title" placeholder="Enter title" />
                            <TextInput label="Drawer" placeholder="Enter drawer name" />
                            <TextInput label="Department" placeholder="Enter department" />
                            <TextInput label="Screen Size" placeholder="Enter screen size" />
                            <TextInput label="Date" placeholder="Enter date" />
                        </TextInputGroup>
                        <button className="mb-3 py-1 mt-1 m-auto  rounded-lg px-1 text-white w-4/5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 font-semibold border-2 border-transparent hover:border-orange-600 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
                            Download
                        </button>
                        <div>
                       
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
