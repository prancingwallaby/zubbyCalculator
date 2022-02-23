
let initialValue = 0;
let secondValue = 0;
let newValue = 0;
let isOperationPicked = false;
let mathSign = "";

let add = function (num1,num2){
    return num1 + num2
}

let subtract = function (num1,num2){
    return num1 - num2
}

let multiply = function (num1,num2){
    return num1 * num2
}

let divide = function (num1,num2){
    return num1 / num2
}

let operate = function(operation,num1,num2){
    let answer = 0;
    switch(operation){
        case 'add':
            console.log("I'm adding");
            answer = add(num1,num2);
            return answer;
            break;
        case 'subtract':
            console.log("I'm subbing");
            return subtract(num1,num2);
            break;
        case 'multiply':
            return multiply(num1,num2);
            break;
        case 'divide':
            return divide(num1,num2);
            break;
    }
}

let displayUpdate = function(number){
    display_div.textContent = number;
}

const display_div = document.querySelector(".display");
const clear_btn = document.querySelector("#clear");
const equals_btn = document.querySelector("#equals");

const plus_btn = document.querySelector("#add");
const minus_btn = document.querySelector("#subtract");
const times_btn = document.querySelector("#multiply");
const divBy_btn = document.querySelector("#divide");


const one_btn = document.querySelector("#one");
const two_btn = document.querySelector("#two");
const three_btn = document.querySelector("#three");
const four_btn = document.querySelector("#four");
const five_btn = document.querySelector("#five");
const six_btn = document.querySelector("#six");
const seven_btn = document.querySelector("#seven");
const eight_btn = document.querySelector("#eight");
const nine_btn = document.querySelector("#nine");
const zero_btn = document.querySelector("#zero");

clear_btn.addEventListener('click',()=>{
    display_div.textContent = "0";
    initialValue = 0;
});

equals_btn.addEventListener('click',()=>{
    display_div.textContent = initialValue;
});

plus_btn.addEventListener('click',()=>{
    isOperationPicked = true;
    mathSign = "add";
});

minus_btn.addEventListener('click',()=>{
    isOperationPicked = true;
    mathSign = "subtract";
});

times_btn.addEventListener('click',()=>{
    isOperationPicked = true;
    mathSign = "multiply";
});

divBy_btn.addEventListener('click',()=>{
    isOperationPicked = true;
    mathSign = "divide";
});



one_btn.addEventListener('click',()=>{
    if(isOperationPicked=='false'){
    display_div.textContent = "1";
    initialValue = 1;}
    else {
        display_div.textContent = "1";
        secondValue = 1;
        initialValue = operate(mathSign,initialValue,secondValue);
        isOperationPicked = false;
    }
});

two_btn.addEventListener('click',()=>{
    if(isOperationPicked=='false'){
    display_div.textContent = "2";
    initialValue = 2;}
    else {
        display_div.textContent = "2";
        secondValue = 2;
        initialValue = operate(mathSign,initialValue,secondValue);
        isOperationPicked = false;
    }
});

three_btn.addEventListener('click',()=>{
    if(isOperationPicked=='false'){
    display_div.textContent = "3";
    initialValue = 3;}
    else {
        display_div.textContent = "3";
        secondValue = 3;
        initialValue = operate(mathSign,initialValue,secondValue);
        isOperationPicked = false;
    }
});

four_btn.addEventListener('click',()=>{
    if(isOperationPicked=='false'){
    display_div.textContent = "4";
    initialValue = 4;}
    else {
        display_div.textContent = "4";
        secondValue = 4;
        initialValue = operate(mathSign,initialValue,secondValue);
        isOperationPicked = false;
    }
});

five_btn.addEventListener('click',()=>{
    if(isOperationPicked=='false'){
    display_div.textContent = "5";
    initialValue = 5;}
    else {
        display_div.textContent = "5";
        secondValue = 5;
        initialValue = operate(mathSign,initialValue,secondValue);
        isOperationPicked = false;
    }
});

six_btn.addEventListener('click',()=>{
    if(isOperationPicked=='false'){
    display_div.textContent = "6";
    initialValue = 6;}
    else {
        display_div.textContent = "6";
        secondValue = 6;
        initialValue = operate(mathSign,initialValue,secondValue);
        isOperationPicked = false;
    }
});

seven_btn.addEventListener('click',()=>{
    if(isOperationPicked=='false'){
    display_div.textContent = "7";
    initialValue = 7;}
    else {
        display_div.textContent = "7";
        secondValue = 7;
        initialValue = operate(mathSign,initialValue,secondValue);
        isOperationPicked = false;
    }
});

eight_btn.addEventListener('click',()=>{
    if(isOperationPicked=='false'){
    display_div.textContent = "8";
    initialValue = 8;}
    else {
        display_div.textContent = "8";
        secondValue = 8;
        initialValue = operate(mathSign,initialValue,secondValue);
        isOperationPicked = false;
    }
});

nine_btn.addEventListener('click',()=>{
    if(isOperationPicked=='false'){
    display_div.textContent = "9";
    initialValue = 9;}
    else {
        display_div.textContent = "9";
        secondValue = 9;
        initialValue = operate(mathSign,initialValue,secondValue);
        isOperationPicked = false;
    }
});

zero_btn.addEventListener('click',()=>{
    if(isOperationPicked=='false'){
    display_div.textContent = "0";
    initialValue = 0;}
    else {
        display_div.textContent = "0";
        secondValue = 0;
        if(mathSign=='divide'){
            display_div.textContent = "What are you crazy? Press clear and start again";
            return;
        }
        initialValue = operate(mathSign,initialValue,secondValue);
        isOperationPicked = false;
    }
});
