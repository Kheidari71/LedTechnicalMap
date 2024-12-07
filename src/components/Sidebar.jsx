import React from 'react';
import SelectInput from './SelectInput';
import DimensionItem from './DimensionItem';

const Sidebar = () => {
    return (
        <div className=' fixed w-64 lg:right-0 -right-64 top-0 pt-14  '>

          
           <div className='w-full h-full p-2'>
<div className='w-full border'>
    <form className='text-start p-2'>
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
<div className='grid grid-cols-2'>
<DimensionItem
        className="flex flex-col items-center border-2 border-gray-300 rounded-md "
        label="Floor Distance" value="28"
        />
         <DimensionItem
        className="flex flex-col items-center border-2 border-gray-300 rounded-md "
        label="Niche Depth var" value="28"
        />
        <DimensionItem
        className="flex flex-col items-center border-2 border-gray-300 rounded-md "
        label="Floor Distance" value="28"
        />
         <DimensionItem
        className="flex flex-col items-center border-2 border-gray-300 rounded-md "
        label="Niche Depth var" value="28"
        />
</div>
       
        </form>
</div>
           </div>
           <div className='w-full h-full p-2'>
<div className='w-full border'>
    <form className='text-start'>
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
        </form>
</div>
           </div>
        </div>
    );
}

export default Sidebar;
