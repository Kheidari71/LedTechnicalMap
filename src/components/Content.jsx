import React from 'react';
import DiagramLED from './DiagramLED';
import Dimension from './Dimension';

const Content = () => {
    return (
        <div className='flex flex-row flex-nowrap'>
            <DiagramLED/>
            <Dimension/>
        </div>
    );
}

export default Content;
