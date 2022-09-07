const displayValue = document.querySelector("#displayValue");
let num1, num2, input, currentOperation, prevOperation;
let numberDisplayed = 0;
let operands = [];

function add(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
    return sum;
}

function subtract(num1, num2) {
    let difference = num1 - num2;
    console.log(difference);
    return difference;
}

function multiply(num1, num2) {
    let product = num1 * num2;
    console.log(product);
    return product;
}

function divide(num1, num2) {

    if (num2 === 0) {
        return alert("Can't divide by 0. Tf you doing?");
    }

    let division = num1 / num2;
    console.log(division.toFixed(2));
    return division.toFixed(2);
}

function operate(operation, num1, num2) {

    let result;

    switch(operation) {

        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case 'x':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;

    }

    return result;

}

function clearAll() {
    num1 = 0;
    num2 = 0;
    return;
}

function clearOperands() {
    
    operands.length = 0;
}

function displayOnScreen() {

    
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.id);

            if (button.classList.contains("digit")) {

                if (numberDisplayed === 0) {
                    displayValue.innerHTML = parseInt(button.id);
                    numberDisplayed = parseInt(button.id);
                    input = numberDisplayed;
                    console.log("Display value: " + numberDisplayed);
                    console.log("EXITING IF");
                }
                else {

                    let currentNumber = parseInt(button.id);
                    numberDisplayed = numberDisplayed*10 + currentNumber;
                    console.log("ENTER ELSE");
                    console.log("Current Numner: " + currentNumber);
                    console.log("Display value: " + numberDisplayed);
                    displayValue.innerHTML = numberDisplayed;
                    input = numberDisplayed;

                }
            }
            
        


            if (button.classList.contains("operant")) {

                //do something

                console.log(operands);


                if (operands.length % 2 === 0) {
                    

                    operands.push(input);
                    currentOperation = button.id;
                    operands.push(currentOperation);

                    console.log(operands);
                    

                    displayValue.innerHTML = button.id;

                    if (typeof operands[0] !== 'number') {
                        clearAll();
                        clearOperands();
                        displayValue.textContent = 0;
                    }

                }
                else {
                    currentOperation = button.id;
                    operands.push(currentOperation);
                    operands.push(input);
                    displayValue.innerHTML = button.id;
                    console.log(operands);

                }
                
                let result = 0;

                /*if (operands.length === 4) {
                    operands.length = 2;
                } */


                if (operands.length > 2) {

                    result = operate(operands[1], operands[0], operands[2]);
                    displayValue.innerHTML = result;

                    clearOperands();

                    input = result;
                    console.log(operands);
                    operands.unshift(input);
                    operands.push(currentOperation);

                }

                console.log(operands);
                numberDisplayed = 0;


            }

            if (button.id === "equals") {

                if (operands.length === 0) {
                    return;
                }

                operands.push(input);
                //operands.push(currentOperation);
                console.log("ENTERING EQUALS " + operands);
                let result = 0;

                result = operate(operands[1], operands[0], operands[2]);
                displayValue.innerHTML = result;

                input = result;
                operands.unshift(input);

                console.log("OPERANDS BEFORE ENTERING EQUALS ID" + operands);

                if (operands.length === 2) {
                    operands.length = 1;
                }

                /* if (operands.length > 2) {

                    result = operate(currentOperation, operands[0], operands[2]);
                    displayValue.innerHTML = result;

                    clearOperands();

                    input = result;
                    operands.unshift(input);
                    operands.push(currentOperation);
                    console.log("OPERANDS IN EQUALS IF" + operands);
                    return;

                } */

                console.log("AFTER EXITING EQUALS IF " + operands);

                clearOperands();

            }

        

            if (button.id === "clearBtn") {
                clearAll();
                displayValue.innerHTML = 0;
                numberDisplayed = 0;
                input = 0;
                clearOperands();

            }
        });
    });
}

displayOnScreen();