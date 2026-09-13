export const computeArithmetic = (param: string): number => {
    let result = 0;
    const splittedValues = param.split(/([+\-*/])/);
    let n1 =0, n2 = 0;
    
    switch(splittedValues[1]) {
        case "+":
            n1 = Number.parseFloat(splittedValues[0])
            n2 = Number.parseFloat(splittedValues[2])
            result = n1 + n2;
        break;
        case "-":
            n1 = Number.parseFloat(splittedValues[0])
            n2 = Number.parseFloat(splittedValues[2])
            result = n1 - n2;
        break;
        case "*":
            n1 = Number.parseFloat(splittedValues[0])
            n2 = Number.parseFloat(splittedValues[2])
            result = n1 * n2;
        break;
        case "/":
            n1 = Number.parseFloat(splittedValues[0])
            n2 = Number.parseFloat(splittedValues[2])
            result = n1 / n2;
        break;
        default:
            console.log("No operand found!")
            result = 0
    }

    return result
}
