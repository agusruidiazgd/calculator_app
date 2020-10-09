
export const doOperation = (operation,memory,number) => {
    switch(operation){
        case "%":
            return memory/number;
        case "X":
            return memory*number;
        case "+":
            return memory+number;
        case "-":
            return memory-number;
        default:
            return alert('fallo :(');
    }
}


