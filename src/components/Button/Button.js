import React from 'react';
import './Button.scss';

const Button = ({buttonNumber, buttonColor}) =>{
    return(
        <button className={buttonColor}>
            {buttonNumber}
        </button>
    );
}

export default Button;
