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
    if (num2 === 0) {
        return 'Math ERROR!';
    }
    return Math.round((num1 / num2) * 100) / 100;
}

function module(num1, num2) {
    return num1 % num2;
}

let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = '';

document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');
    const decimalButton = document.getElementById('decimal')

    function updateDisplay() {
        if (displayValue) {
            const numberToDisplay = parseFloat(displayValue);
            display.textContent = formatNumber(numberToDisplay);
        } else {
            display.textContent = '';
        }
        decimalButton.disable = displayValue.includes('.');
    }

    function formatNumber(number) {

        if (isNaN(number)) return '0';

        const numberString = number.toString();

        if (numberString.length > 8) {
            return number.toExponential(2);
        }
        
        if (Number.isInteger(number)) {
            return number.toString();
        }

        return number.toFixed(2).replace(/\.00/,'');
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.textContent;

            if (value === 'AC') {
                resetCalculator();
            } else if (value === '=') {
                if (firstNumber !== null && operator !== null && displayValue !== '') {
                    secondNumber = parseFloat(displayValue);
                    const result = operate(operator, firstNumber, secondNumber);
                    displayValue = result.toString();
                    firstNumber = null;
                    operator = null;
                }
            } else if (['+', '-', '*', '/', '%'].includes(value)) {
                if (displayValue !== '') {
                    if (firstNumber === null) {
                        firstNumber = parseFloat(displayValue);
                    } else if (operator !== null) {
                        secondNumber = parseFloat(displayValue);
                        const result = operate(operator, firstNumber, secondNumber);
                        displayValue = result.toString();
                    }
                    operator = value;
                    displayValue = '';
                }
            } else if (value === '.') {
                if (!displayValue.includes('.')) {
                    displayValue += value;
                }
            } else if (value === '+/-') {
                if (displayValue) {
                    displayValue = (-parseFloat(displayValue).toString());
                }
            } else if (value === 'CE') {
                displayValue = displayValue.slice(0, -1);
            } else {
                if (displayValue === '' && value === '0') {
                    return;
                }
                displayValue += value;
            }
            updateDisplay();
        });
    });

    function resetCalculator() {
        firstNumber = null;
        secondNumber = null;
        displayValue = '0';
        operator = null;
        updateDisplay();
    }

    function operate(operator, a, b) {
        if (operator === '+') {
            return add(a, b);
        } else if (operator === '-') {
            return subtract(a, b);
        } else if (operator === '*') {
            return multiply(a, b);
        } else if (operator === '/') {
            return divide(a, b);
        } else if (operator === '%') {
            return module(a, b);
        }
    }
});