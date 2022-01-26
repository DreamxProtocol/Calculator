const screen = document.querySelector("#screenNumber");
const numbers = document.querySelectorAll(".digits button");
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#all_clear");
const message = document.querySelector("#message");
const values = {};
var addSwitch = false; 
var subtractSwitch = false;
var multiplySwitch = false;
var divisionSwitch = false; 
var value2 = "";

function flicker(){
    values.value1 = value2;
    value2 = 0;
    screen.textContent = "";
};

for (let number of numbers.values()){
    number.addEventListener("click", () => {
    screen.textContent += number.textContent;
    value2 = screen.textContent;
    })
};

addition.addEventListener("click", () => {
    flicker();
    addSwitch = true; 
});

subtraction.addEventListener("click", () => {
    flicker();
    subtractSwitch = true;
});

multiplication.addEventListener("click", () => {
    flicker();
    multiplySwitch = true;
});

division.addEventListener("click", () => {
    flicker();
    divisionSwitch = true;
});

equal.addEventListener("click", () => {

    message.style.display = "block";

    if(addSwitch){
        values.value2 = value2; 
        var sum = parseFloat(values.value2) + parseFloat(values.value1);
        screen.textContent = sum;   

    } else if (subtractSwitch) {
        values.value2 = value2; 
        var difference = parseFloat(values.value1) - parseFloat(values.value2);
        screen.textContent = difference;

    } else if (multiplySwitch){
        values.value2 = value2; 
        var product = parseFloat(values.value1) * parseFloat(values.value2);
        screen.textContent = product;

    } else if (divisionSwitch){
        values.value2 = value2; 
        var quotient = parseFloat(values.value1) / parseFloat(values.value2);
        screen.textContent = quotient;
    }
})

clear.addEventListener("click", () => {
    addSwitch = false;
    subtractSwitch = false;
    multiplySwitch = false; 
    divisionSwitch = false;
    values.value1 = "";
    values.value2 = "";
    value2 = 0;
    screen.textContent = "";
    message.style.display = "none";

})

