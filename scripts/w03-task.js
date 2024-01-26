/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}
const addNumbers = () => {
    let addNumber1 = parseFloat(document.getElementById('add1').value);
    let addNumber2 = parseFloat(document.getElementById('add2').value);
    let sumNumbers = add(addNumber1, addNumber2)
    document.getElementById('sum').value =  sumNumbers;
};

document.getElementById('addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers 
Using function expressions, repeat the items in Step 2 with new 
functions named subtract and subtractNumbers and HTML form 
controls with IDs of subtract1, subtract2, subtractNumbers, 
and difference.
*/
const subtract = (dif1, dif2) => dif1-dif2;

const subtractNumbers = () => {
    let subtract1 = parseFloat(document.getElementById('subtract1').value);
    let subtract2 = parseFloat(document.getElementById('subtract2').value);
    subtractTotal = subtract(subtract1, subtract2)
    document.getElementById('difference').value = subtractTotal;
}
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (mult1, mult2) => mult1*mult2;

const multiplyNumbers = () => {
    let factor1 = parseFloat(document.getElementById('factor1').value);
    let factor2 = parseFloat(document.getElementById('factor2').value);
    multiTotal = multiply(factor1, factor2)
    document.getElementById('product').value = multiTotal;

}
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(x, y) {
    return x / y;
}

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseFloat(document.getElementById('divisor').value);
    let quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient;
};
document.getElementById("divideNumbers").addEventListener('click', divideNumbers);


/* Decision Structure */

function getTotal() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    if (document.getElementById('member').checked) {
    subtotal = subtotal- subtotal * .2;
    } 
    document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
}
document.getElementById('getTotal').addEventListener('click', getTotal); 

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Odds Only Array */
document.getElementById('array').textContent = numbersArray;
function isOdd(num) {
    if (num % 2 === 1)
    return num
}
document.getElementById('odds').textContent = numbersArray.filter(isOdd);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number)
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number *2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map(num => num *2).reduce((acc, cur) => acc + cur);