import React from 'react';
import './Button.scss';
import {handleButtonPress} from '../Helpers/Helpers';

const Button = ({keys, content, data, setData, memory, setMemory, operator, setOperator, buttonColor}) =>{
    
    return(
        <button 
            keys={keys}
            value={content.toString()} 
            className={buttonColor} 
            onClick={(e)=>{handleButtonPress(e.target.value,data, setData, memory, setMemory, operator, setOperator)}}       
        >
            {content}
        </button>
    )
    
}

export default Button;
