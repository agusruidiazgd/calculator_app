import React from 'react';
import './Display.scss';

const Display = ({number}) =>{
    return(
        <input className="display" type="text" value={number}/>
    );
}

export default Display;
