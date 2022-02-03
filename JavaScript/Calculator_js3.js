const screen = document.querySelector("#screenNumber");
const numbers = document.querySelectorAll(".digits button");
const operators = document.querySelectorAll("#operators .signs");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#all_clear");
const values = {
    value1: "",
    value2: "",
    op: ""
};

// values.value2 is empty from the start
// so whichever numbers are clicked on and inserted into it, 
// it will be displayed. It will be emptied and put into
// values.value1 when transferValue() comes into play. 
// Since its values are always empty and can have numbers inserted into it,
// its value is what will displayed while editing the screen.  
function toScreen() {
  
    screen.textContent = values.value2;
};

// This takes the values.value2 from the beginning and 
// transfers its value over to values.value1 then clears 
// values.value2 so we can reuse it. 
function transferValue() {

    values.value1 = parseFloat(values.value2);
    values.value2 = "";
}

// This function works a operation depending on the value of 
// values.op, which is chosen with an operator button.
// It takes the answer from values.value1 and values.value2 and inserts 
// it into values.value1 then empties values.value2 so new values can be  
// inserted into it and displayed on the screen 
function compute(x) {

    let computation;
    
    switch(x){
        case "+":
            computation = parseFloat(values.value1) + parseFloat(values.value2); 
            values.value1 = computation;
            values.value2 = "";
            break
        case "-":
            computation = parseFloat(values.value1) - parseFloat(values.value2);
            values.value1 = computation;
            values.value2 = "";
            break
        case "x":
            computation = parseFloat(values.value1) * parseFloat(values.value2);
            values.value1 = computation;
            values.value2 = "";
            break
        case "/":
            computation = parseFloat(values.value1) / parseFloat(values.value2);
            values.value1 = computation;
            values.value2 = "";
            break       

    }
}

// after compute(), the answer from values.value1 and values.value2
// are inserted into values.value1, which is what is displayed in
// the screen using computationToScreen(). Then values.value1 is transfered 
// over to values.value2, then values.value1 is emptied.
// If an operator is clicked on after this, transferValue() transfers 
// values.value2 into values.value1, resetting the screen text to 
// be correlated to values.value2. *This function is only applied to the
// "=" sign.
function computationToScreen() {

    screen.textContent = values.value1;
    values.value2 = values.value1;
    values.value1 = "";
}

// adds whichever button (number) you click on to the "screen text"
// and into values.value2
numbers.forEach(button => {button.addEventListener ("click", () => {
  
    values.value2 += button.textContent;
    toScreen();
    })  
})

// adds whichever operation (x,/,+,-) you click on
// into values.op, which determines the operation
// to be used in compute()
// This also determines whether we are 
// going to transfervalue() or compute() them based on 
// the "if" statement
operators.forEach(button => {button.addEventListener("click", () => {

    values.op = button.textContent;
    
    if (values.value1 === "") {
        transferValue();

    } else if (values.value1 !== ""){
        compute(values.op);

    }
    })
})

equal.addEventListener("click", () => {

    compute(values.op);
    computationToScreen();
})

// clears everything in the "values" object
// and the screen text 
clear.addEventListener("click", () => {

    values.value1 = "";
    values.value2 = "";
    values.op = "";
    screen.textContent = "";
})







