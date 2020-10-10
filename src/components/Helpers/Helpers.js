export const btnNumbers = ["1","2","3","4","5","6","7","8","9"]; //otro arrchivo helpers
export const btnOperations = ["%","X","-","+","="];

export const doOperation = (operation,memory,number,setMemory,setData) => {
    switch(operation){
        case "%":
            setMemory(null);
            return setData((memory / number).toFixed(2));
        case "X":
            setMemory(null);
            return setData(memory * number);
        case "+":
            setMemory(null);
            return setData(memory + number);
        case "-":
            setMemory(null);
            return setData(memory - number);
        default:
            setMemory(null);
            return alert('fallo :(');
    }
}

export const handleButtonPress = (content, data, setData, memory, setMemory, operator, setOperator) => {
    data === 0 ? setData(content) : setData((parseFloat(data) + content).toString());
    
    if(content === "C"){
        setData(0);
        setMemory(null);
        setOperator(null);
        return;
    }

    if(content === "+"){
        if(operator !== null){
            if(operator === "+"){
                setMemory(Number(memory + parseFloat(data)));
            }else if(operator === "-"){
                setMemory(memory - parseFloat(data));
            }else if(operator === "X"){
                setMemory(memory * parseFloat(data));
            }else if(operator === "%"){
                setMemory((memory / parseFloat(data)).toFixed(2)); 
            }
        }else{
            setMemory(parseFloat(data)); 
        }
        setOperator("+");
        setData(0);
        return;
    }

    if(content === "-"){
        if(operator !== null){
            if(operator === "+"){
                setMemory(Number(memory + parseFloat(data)));
            }else if(operator === "-"){
                setMemory(memory - parseFloat(data));
            }else if(operator === "X"){
                setMemory(memory * parseFloat(data));
            }else if(operator === "%"){
                setMemory(memory / parseFloat(data)); 
            }
            
        }else{
            setMemory(parseFloat(data)); 
        }
        
        setData(0);
        setOperator("-");
        return;
    }
    if(content === "X"){ //switch para ser duquesa
        if(operator !== null){
            if(operator === "+"){
                setMemory(Number(memory + parseFloat(data)));
            }else if(operator === "-"){
                setMemory(memory - parseFloat(data));
            }else if(operator === "X"){
                setMemory(memory * parseFloat(data));
            }else if(operator === "%"){
                setMemory(memory / parseFloat(data)); 
            }
            
        }else{
            setMemory(parseFloat(data)); 
        }

        setData(0);
        setOperator("X");
        return;
    }
    if(content === "%"){
        if(operator !== null){
            if(operator === "+"){
                setMemory(memory + parseFloat(data));
            }else if(operator === "-"){
                setMemory(memory - parseFloat(data));
            }else if(operator === "X"){
                setMemory(memory * parseFloat(data));
            }else if(operator === "%"){
                setMemory(memory / parseFloat(data)); 
            }
            
        }else{
            setMemory(parseFloat(data)); 
        }
        setData(0);
        setOperator("%");
        return;
    }

    if(content === "=") doOperation(operator,memory,parseFloat(data), setMemory,setData);
}