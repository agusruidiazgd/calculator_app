
export const operations = (operation,numberBefore,numberAfter) => {
    switch(operation){
        case "%":
            return `${numberBefore} / ${numberAfter}`;
            break;
        case "X":
            return `${numberBefore} * ${numberAfter}`;
            break;
        case "+":
            return `${numberBefore} + ${numberAfter}`;
            break;
        case "-":
            return `${numberBefore} - ${numberAfter}`;
            break;
        default:
            return alert('fallo :(');
    }
}


