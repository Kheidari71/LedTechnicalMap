import React from "react";
import DimensionItem from "./DimensionItem";

const NotesSection = () => {
    return (

        <div className="text-start border border-gray-300 rounded-sm p-4  mb-2 shadow-sm">
            {/* Title */}
            <h3 className="text-base font-semibold text-gray-700 ">
                Notes
            </h3>
            <div className="flex items-center justify-around">
                {/* Text Description */}
                <p className="text-gray-600 text-sm ">
                    Install recessed receptacle box with:<br />
                    2x Terminated Power Outlets<br />
                    1x Terminated Data CAT5 Ethernet Outlet
                </p>
                {/* Dimension section */}
                <div className="flex flex-col gap-2">
                    <DimensionItem label="Height" value="30.5" className="flex flex-row items-center justify-around border border-gray-300 h-8" />
                    <DimensionItem label="Width" value="30.5" className="flex flex-row items-center justify-between border border-gray-300 h-8" />
                    <DimensionItem label="Depth" value="30.5" className="flex flex-row items-center justify-between border border-gray-300 h-8" />
                </div>
            </div>

        </div>
    );
};

export default NotesSection;
