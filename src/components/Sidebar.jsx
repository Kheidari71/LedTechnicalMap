import React from 'react';
import SelectInput from './SelectInput';
import DimensionItem from './DimensionItem';

const Sidebar = () => {
    return (
        <div className='overflow-y-auto h-full fixed w-72 lg:right-0 -right-72 top-0 pt-14  '>

          
           <div className=' w-full p-2'>
<div className='w-full border'>
    <form className='flex mt-4 flex-col items-center justify-around text-start pb-6'>
        <p className='font-bold text-sm mb-2'>Configuration</p>
        <SelectInput
        label="Screen"
        options={[
            {value: "On all product" , label: "On All product"},
            {value: "On some of the product" , label: "On Some of the product"}
            ]}
        />
        <SelectInput
        label="Media Player"
        options={[
            {value: "On all product" , label: "On All product"},
            {value: "On some of the product" , label: "On Some of the product"}
            ]}
        />
        <SelectInput className="text-center"
        label="Mount"
        options ={[
            {value: "On all product" , label: "On All product"},
            {value: "On some of the product" , label: "On Some of the product"}
            ]}
        />
        <SelectInput
        label="Receptacle Box"
        options={[
            {value: "On all product" , label: "On All product"},
            {value: "On some of the product" , label: "On Some of the product"}
            ]}
        />
<div className='grid grid-cols-1 px-5'>
<DimensionItem
        className="flex h-8 mb-2 flex-row items-center justify-between  border-2 border-gray-300 rounded-md" 
        label="Floor Distance" value="28"
        />
         <DimensionItem
        className="flex h-8 mb-2 flex-row items-center justify-between  border-2 border-gray-300 rounded-md"
        label="Niche Depth var" value="28"
        />
        <DimensionItem
        className="flex flex-row items-center justify-between  border-2 border-gray-300 rounded-sm"
        label="Floor Distance" value="28"
        />
         <DimensionItem
        className="flex flex-row items-center justify-between  border-2 border-gray-300 rounded-sm"
        label="Niche Depth var" value="28"
        />
</div>
       
        </form>
</div>
           </div>
           <div className='w-full h-full p-2'>
<div className='w-full border'>
    <form className=' flex flex-col items-center  text-start p-5'>
    <p className='font-bold text-sm mb-2'>Description</p>
        <SelectInput
        label="Title"
        options={[
            {value: "On all product" , label: "On All product"},
            {value: "On some of the product" , label: "On Some of the product"}
            ]}
        />
        <SelectInput
        label="Drawer"
        options={[
            {value: "On all product" , label: "On All product"},
            {value: "On some of the product" , label: "On Some of the product"}
            ]}
        />
        <SelectInput className="text-center"
        label="Department"
        options ={[
            {value: "On all product" , label: "On All product"},
            {value: "On some of the product" , label: "On Some of the product"}
            ]}
        />
        <SelectInput
        label="Screen Size"
        options={[
            {value: "On all product" , label: "On All product"},
            {value: "On some of the product" , label: "On Some of the product"}
            ]}
        />
         <SelectInput
        label="Date"
        options={[
            {value: "On all product" , label: "On All product"},
            {value: "On some of the product" , label: "On Some of the product"}
            ]}
        />
        <button className=' rounded-md mt-3 p-2 text-white w-full bg-blue-400 border-blue-400'>Doanload</button>
        </form>
</div>
           </div>
        </div>
    );
}

export default Sidebar;
