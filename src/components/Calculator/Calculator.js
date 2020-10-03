import React, {useState} from 'react';
import Display from '../Display/Display';
import Button from '../Button/Button';
import './Calculator.scss';

const Calculator = () =>{

    const [number, setNumber] = useState(0);
    const btnNumbers = [1,2,3,4,5,6,7,8,9];
    const btnOperations = ["%","X","-","+","="];

    return(
        <main className="main-container">
            <Display number={number}/>
            <section className="section-container">
                <div>
                    <button className="large-btn">C</button>
                    <div className="container-numbers">
                        {
                            btnNumbers.map(num=>{
                                return(
                                    <Button buttonNumber={num} buttonColor="btn grey"/>
                                );
                            })
                        }
                    </div>
                    <button className="large-btn">0</button>
                </div>
                <div className="container-operations">
                    {
                        btnOperations.map(op =>{
                            return(
                                <Button buttonNumber={op} buttonColor="btn orange"/>
                            );
                        })
                    }
                </div> 
            </section>
            
        </main>
    );
}



export default Calculator;
