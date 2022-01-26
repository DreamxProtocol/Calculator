const screen = document.querySelector("#screenNumber");
const numbers = document.querySelectorAll(".digits button");
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#all_clear");
const values = {};
var addSwitch = false; 
var subtractSwitch = false;
var multiplySwitch = false;
var divisionSwitch = false;  

for (let number of numbers.values()){

    number.addEventListener("click", () => {
         
        screen.textContent += number.textContent;
        var value2 = screen.textContent;
        
        addition.addEventListener("click", () => {
        
            values.value1 = parseFloat(value2);
            value2 = 0;
            screen.textContent = "";
            addSwitch = true; 
        })

        subtraction.addEventListener("click", () => {

            values.value1 = parseFloat(value2);
            value2 = 0;
            screen.textContent = ""
            subtractSwitch = true;
        })

        multiplication.addEventListener("click", () => {

            values.value1 = parseFloat(value2);
            value2 = 0;
            screen.textContent = "";
            multiplySwitch = true;
        })

        division.addEventListener("click", () => {

            values.value1 = parseFloat(value2);
            value2 = 0;
            screen.textContent = "";
            divisionSwitch = true; 
        })

        equal.addEventListener("click", () => {

            if (addSwitch){
                values.value2 = parseFloat(value2);
                var sum = values.value2 + values.value1;
                screen.textContent = sum;
            } else if (subtractSwitch) {
                values.value2 = parseFloat(value2);
                var difference = values.value1 - values.value2; 
                screen.textContent = difference;
            } else if(multiplySwitch){
                values.value2 = parseFloat(value2);
                var product = values.value1 * values.value2;
                screen.textContent = product;
            } else if (divisionSwitch){
                values.value2 = parseFloat(value2);
                var quotient = values.value1 / values.value2; 
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

        })

    })

}







