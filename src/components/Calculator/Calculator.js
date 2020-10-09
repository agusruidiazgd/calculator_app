import React, {useState} from 'react';
import Display from '../Display/Display';
import Button from '../Button/Button';
import './Calculator.scss';
import doOperation from '../Operations/Operations';

const Calculator = () =>{

    const [data, setData] = useState(0);
    const [memory, setMemory] = useState(null); // TODO: ver como guardar los numeros en la memoria
    const [operator, setOperator] = useState("");

    const btnNumbers = ["1","2","3","4","5","6","7","8","9"];
    const btnOperations = ["%","X","-","+","="];

   const handleButtonPress = (content) => {

        setData((parseFloat(data) + content).toString())

        if(content === "C"){
            setData(0);
            setMemory(null);
            return;
        }

        if(content === "+"){
            setData(0);
            setMemory(parseFloat(data));
            setOperator("+");
            console.log(data);
            console.log(memory);
            return;
        }

        if(content === "-"){
            setMemory(parseFloat(data));
            setData(0);
            setOperator("-");
            return;
        }
        if(content === "X"){
            setMemory(parseFloat(data));
            setData(0);
            setOperator("X");
            return;
        }
        if(content === "%"){
            setMemory(parseFloat(data));
            setData(0);
            setOperator("%");
            return;
        }
    
        if(content === "="){
            switch(operator){
                case "+":
                    setMemory(null);
                    return setData(memory + parseFloat(data));
                case "-":
                    setMemory(null);
                    return setData(memory - parseFloat(data));
                case "X":
                    setMemory(null);
                    return setData(memory * parseFloat(data));
                case "%": //como hacer que no se vean decimales infinitos??
                    setMemory(null);
                    return setData(memory / parseFloat(data));   
                default:
                    setMemory(null);
                    return console.warn("Operation failed")    
            }
        }
   }
    return(
        <main className="main-container">
            <Display data={data}/>
            <section className="section-container">
                <div>
                    <button key="c" className="large-btn" onClick={()=>{handleButtonPress("C")}}>C</button>
                    <div className="container-numbers">
                        {
                            btnNumbers.map(num=>{
                                return(
                                    <Button keys={num} content={num} data={data} onClickButton={handleButtonPress} setData={setData} buttonColor="btn grey"/>
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
                                <Button keys={op} content={op} data={data} onClickButton={handleButtonPress} setData={setData} buttonColor="btn orange"/>
                            );
                        })
                    }
                </div> 
            </section>
        </main>
    );
}



export default Calculator;
