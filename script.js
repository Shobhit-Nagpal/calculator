function add(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
    return sum;
}

function subtract(num1, num2) {
    let difference = num1 + num2;
    console.log(difference);
    return difference;
}

function multiply(num1, num2) {
    let product = num1 + num2;
    console.log(product);
    return product;
}

function divide(num1, num2) {
    let division = num1 + num2;
    console.log(division);
    return division;
}

function operate(operator, num1, num2) {

    switch(operator) {

        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case 'x':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;

    }

}

function displayOnScreen() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.id);
        });
    });
}

displayOnScreen();