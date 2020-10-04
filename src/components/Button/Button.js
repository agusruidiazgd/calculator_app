import React from 'react';
import './Button.scss';
import operations from '../Operations/Operations';

const Button = ({keys, value, data, setData, setOperation, buttonColor}) =>{

    if(typeof data === 'number'){
        return(
            <button 
                key={keys}
                value={value} 
                className={buttonColor} 
                onClick={(e)=>{data === 0 ? setData(Number(e.target.value)) : setData(Number(data + e.target.value))}}
            >
                {value}
                {console.log(data)}
            </button>
        )
    }else{
        return(
            <button 
                key={keys}
                value={value} 
                className={buttonColor} 
                onClick={(e)=> {
                    setOperation(e.target.value)
                    setData(0)
                }}
                
            >
                {value}
                {console.log(data)}
            </button>
        );
    }
}

export default Button;
