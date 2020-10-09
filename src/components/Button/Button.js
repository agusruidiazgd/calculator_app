import React from 'react';
import './Button.scss';


const Button = ({keys, content, data, onClickButton, setData, buttonColor}) =>{
    
    return(
        <button 
            key={keys}
            value={content} 
            className={buttonColor} 
            //onClick={(e)=>{data === 0 ? setData(e.target.value) : setData(data + e.target.value)}}
            onClick={(e) => onClickButton(e.target.value)}         
        >
            {content}
        </button>
    )
    
}

export default Button;
