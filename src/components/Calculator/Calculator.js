import React, {useState} from 'react';
import Display from '../Display/Display';
import Button from '../Button/Button';
import {btnNumbers, btnOperations, handleButtonPress} from '../Helpers/Helpers';
import './Calculator.scss';


const Calculator = () =>{
    const [data, setData] = useState(0);
    const [memory, setMemory] = useState(null); 
    const [operator, setOperator] = useState(null);

    return(
        <main className="main-container">
            <Display id="display" data={data}/>
            <section className="section-container">
                <div>
                    <button 
                        key="c" 
                        className="large-btn" 
                        onClick={()=>{handleButtonPress("C",data,setData,memory, setMemory, operator, setOperator)}}
                    >C</button>
                    <div className="container-numbers">
                        {
                            btnNumbers.map(num=>{
                                return(
                                    <Button 
                                        keys={num} 
                                        content={num} 
                                        data={data} 
                                        setData={setData} 
                                        memory={memory}
                                        setMemory={setMemory}
                                        operator={operator}
                                        setOperator={setOperator}
                                        buttonColor="btn grey"
                                    />
                                );
                            })
                        }
                    </div>
                    <button 
                        key = "0"
                        value = "0" 
                        className = "large-btn" 
                        onClick = {(e)=> data === "0" ? setData(Number(e.target.value)) : setData(Number(data + e.target.value))}
                    >0</button>
                </div>
                <div className="container-operations">
                    {
                        btnOperations.map(op =>{
                            return(
                                <Button 
                                    keys={op} 
                                    content={op} 
                                    data={data} 
                                    setData={setData} 
                                    memory={memory}
                                    setMemory={setMemory}
                                    operator={operator}
                                    setOperator={setOperator}
                                    buttonColor="btn orange"
                                />
                            );
                        })
                    }
                </div> 
            </section>
        </main>
    );
}



export default Calculator;
