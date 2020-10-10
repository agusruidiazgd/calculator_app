import React from 'react';
import './Display.scss';

const Display = ({data}) =>{
    return(
        <input 
            className="display" 
            type="text" 
            value = {data.toString()}
        />
    );
}

export default Display;
