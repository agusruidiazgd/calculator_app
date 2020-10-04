import React, {useState} from 'react';
import Display from '../Display/Display';
import Button from '../Button/Button';
import './Calculator.scss';

const Calculator = () =>{

    const [data, setData] = useState(0);
    const [operation, setOperation] = useState("");

    const btnNumbers = [1,2,3,4,5,6,7,8,9];
    const btnOperations = ["%","X","-","+","="];

   
    return(
        <main className="main-container">
            <Display data={data}/>
            <section className="section-container">
                <div>
                    <button key="c" className="large-btn" onClick={()=>{setData(0)}}>C</button>
                    <div className="container-numbers">
                        {
                            btnNumbers.map(num=>{
                                return(
                                    <Button keys={num} value={num} data={data} setData={setData} buttonColor="btn grey"/>
                                );
                            })
                        }
                    </div>
                    <button 
                        key = "0"
                        value = "0" 
                        className = "large-btn" 
                        onClick = {(e)=> data == 0 ? setData(Number(e.target.value)) : setData(Number(data + e.target.value))}
                    >0</button>
                </div>
                <div className="container-operations">
                    {
                        btnOperations.map(op =>{
                            return(
                                <Button keys={op} value={op} data={operation} setData={setData} setOperation={setOperation} buttonColor="btn orange"/>
                            );
                        })
                    }
                </div> 
            </section>
            
        </main>
    );
}



export default Calculator;
