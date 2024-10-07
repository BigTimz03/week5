//Question one

function add (number1, number2, operator) {
    if (operator === "+") {
        return number1 + number2;
    }else if (operator === "-"){
        return number1 - number2
    }else if(operator === "*") {
        return number1 * number2
    }else if(operator === "/") {
        return number1 / number2
    }else if(operator === "%") {
        return number1 % number2
    }else {
        return "Invalid Operator"
    }
}

const returnedValue = add(7, 3, "%");


console.log(returnedValue.toFixed(2));