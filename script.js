
//Declaring global variables
let num1, num2, input, currentOperation, prevOperation;
let numberDisplayed = 0;
let operands = [];

const displayValue = document.querySelector("#displayValue");

//Functions that perform the operations
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
        return alert("Can't divide by 0. Tf you doing?");
    }

    let division = num1 / num2;

    if (Number.isInteger(division) === true) {
        return division;
    }
    else {
        return division.toFixed(2);

    }
}


//Function that calls on specific operation required by user
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

//Function to clear all values
function clearAll() {
    num1 = 0;
    num2 = 0;
    return;
}

//Function to clear operands array
function clearOperands() {
    
    operands.length = 0;
}


//Function to display on calculator screen
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
                    
                    //Assigning input as null to overcome the error of user pressing operation button multiple times
                    input = null;

                }
                else {

                    currentOperation = button.id;
                    operands.push(currentOperation);
                    operands.push(input);
                    displayValue.innerHTML = button.id;
                    console.log(operands);

                }
                
                let result = 0;


                if (operands.length > 2) {


                    //If user entered operations button continuously without numeric input
                    if (operands[2] === null) {
                        for(let i = 0 ; i < 2 ; i++) {
                            operands.pop();
                        }


                        console.log(operands);
                        return;
                    }

                    //Calculate result after 2 inputs and return it
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