import React from "react";
import Logo from "../img/logo.png"
// Level 2: SingleInput Component
const SingleInput = ({ label, placeholder, className }) => {
    return (
        <div className={`${className} mb-3`}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {label}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-sm px-4 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-all duration-200 ease-in-out"
            />
        </div>
    );
};

// Level 3: FormWithGroup Component
const FormWithGroup = () => {
    return (
        <form className="relative p-4 border dark:bg-gray-900  px-6 w-full max-w-lg mx-auto">
                <img className="bg-gray-800 absolute top-0 mb-4 left-0 w-20 " src={Logo} alt="logo" />
            {/* Group 1: Description */}
            <div className="w-full pt-4 shadow-sm  ">
    
                <div className="flex gap-4">
                    <div className="flex-1">
                        <SingleInput label="Title" placeholder="Enter title" />
                    </div>
                    <div className="flex-1">
                        <SingleInput label="Drawer" placeholder="Enter drawer name" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <SingleInput label="Department" placeholder="Enter department" />
                    </div>
                    <div className="flex-1">
                        <SingleInput label="Screen Size" placeholder="Enter screen size" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <SingleInput label="Date" placeholder="Enter date" />
                    </div>
                    <div className="flex-1">
                        <SingleInput label="Revision" placeholder="Enter date" />
                    </div>
                    <div className="flex-1">
                        <SingleInput label="Sheet" placeholder="Enter date" />
                    </div>
                </div>
            </div>

            {/* Group 2: Additional Details */}


        </form>
    );
};

export default FormWithGroup;
