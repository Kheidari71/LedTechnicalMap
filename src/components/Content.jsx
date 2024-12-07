import React from 'react';
import DiagramLED from './DiagramLED';
import DimensionBoxes from './Dimension';


const Content = () => {
    return (
        <section className="overflow-y-auto w-full h-full pt-14 lg:pr-72 pr-0 top-0">
            <div className="w-full p-2 h-full ">
                {/* Grid layout for side-by-side containers */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 h-full border ">
                    {/* Diagram takes 7 columns on large screens */}
                    <div className="col-span-12 lg:col-span-7 flex items-center justify-center">
                        <DiagramLED />
                    </div>
                    {/* Dimensions take 5 columns on large screens */}
                    <div className="col-span-12 lg:col-span-5 flex flex-col items-start ">
                        <DimensionBoxes />
                    </div>

                 
                    
                </div>
            </div>
        </section>
    );
};

export default Content;
