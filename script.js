function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num1 == 0) {
        return 0;
    }
    else if (num2 == 0) {
        return 'Math ERROR';
    }
    return num1 / num2;
}

let firstNumber = null;
let secondNumber = null;
let operator = null;

function operate(opt, a, b) {
    if (opt === '+') {
        return add(a, b);
    } else if (opt === '-') {
        return subtract(a, b);
    } else if (opt === '*') {
        return multiply(a, b);
    } else if (opt === '/') {
        return divide(a, b);
    }
    
}

/*console.log(operate('+',2,2));
console.log(operate('-',2,2));
console.log(operate('*',2,2));
console.log(operate('/',2,2));*/



