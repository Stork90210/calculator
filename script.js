function add(a,b) {   
    return +a + +b;
}

function substract(a,b) {
    return +a - +b;
}

function multiply(a,b) {
    return +a * +b;
}

function divide(a,b) {
    if ( b == "0") {
        valueA = valueB = operator = ""; 
        return "Flauwekul!"    
    }
    return +a / + b;
}


function operate(operator, a, b) {
    
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return substract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}


let displayValue = "";
let valueA = "";
let valueB = "";
let operator = "";
const audio = new Audio("sounds/fart-7.mp3")



document.getElementById("1").onclick = () => addToString("1");
document.getElementById("2").onclick = () => addToString("2");
document.getElementById("3").onclick = () => addToString("3");
document.getElementById("4").onclick = () => addToString("4");
document.getElementById("5").onclick = () => addToString("5");
document.getElementById("6").onclick = () => addToString("6");
document.getElementById("7").onclick = () => addToString("7");
document.getElementById("8").onclick = () => addToString("8");
document.getElementById("9").onclick = () => addToString("9");
document.getElementById("0").onclick = () => addToString("0");
document.getElementById("00").onclick = () => addToString("00");
document.getElementById("pi").onclick = () => {displayValue = ""; addToString("3.14159265")};
document.getElementById("decpoint").onclick = () => addToString(".")


document.getElementById("add").onclick = () => {equals("+"); operator = "+";}
document.getElementById("substract").onclick = () => {equals("-"); operator = "-";}
document.getElementById("multiply").onclick = () => {equals("*"); operator = "*";}
document.getElementById("divide").onclick = () => {equals("/"); operator = "/";}
document.getElementById("equals").onclick = () => {equals("=")}
document.getElementById("clear").onclick = () => {displayValue = ""; valueA = ""; valueB = ""; operator = ""; updateDisplay()};
document.getElementById("backspace").onclick = () => {displayValue = displayValue.slice(0, -1);updateDisplay()};


document.addEventListener("keydown", event => {
    switch (event.code) {
        case "Numpad1":
            addToString("1");
            break;
        case "Numpad2":
            addToString("2");
            break;
        case "Numpad3":
            addToString("3");
            break;
        case "Numpad4":
            addToString("4");
            break;
        case "Numpad5":
            addToString("5");
            break;
        case "Numpad6":
            addToString("6");
            break;
        case "Numpad7":
            addToString("7");
            break;
        case "Numpad8":
            addToString("8");
            break;
        case "Numpad9":
            addToString("9");
            break;
        case "Numpad0":
            addToString("0");
            break;
        case "KeyP":
            displayValue = ""; addToString("3.14159265");
            break;
        case "NumpadDecimal":
            addToString(".");
            break;
        case "NumpadAdd":
            equals("+"); operator = "+";
            break;
        case "NumpadSubstract":
            equals("-"); operator = "-";
            break;
        case "NumpadMultiply":
            equals("*"); operator = "*";
            break;
        case "NumpadDivide":
            equals("/"); operator = "/";
            break;
        case "NumpadEnter":
            equals("=");
            break;
        case "Backspace":
            displayValue = displayValue.slice(0, -1);updateDisplay();
            break;
        case "Delete":
            displayValue = ""; valueA = ""; valueB = ""; operator = ""; updateDisplay();
            break;
        case "NumpadEnter":
            equals("=");
            break;  
               
    }

});


function addToString(itemToBeAdded) {
    let maxLength = 17;
    if (displayValue.includes(".")) {
        maxLength = 18;
    }
    if (itemToBeAdded == "." && displayValue.includes(".")) {

    } else {
        if (displayValue.length < maxLength) {
        displayValue = displayValue + itemToBeAdded;
        updateDisplay();
        } else {
        audio.currentTime = 0;
        audio.play();
        }
    }
}


function equals(testForOperator) {
    if (operator == "") {
        operator = testForOperator;
    }
    if (displayValue !== "") {                      
        valueB = displayValue;                      // zet displaywaarde naar waardeB indien displaywaarde niet leeg is.
        if (valueA !== "") {
            displayValue = operate(operator, valueA, valueB);
            displayValue = formatValue(displayValue);
            updateDisplay();
            if (displayValue !== "Delen door 0 is flauwekul!") {
                valueA = displayValue;
                }
            displayValue = "";                       // berekening indien waardeB niet leeg is, en waarde A niet leeg is.
        } else {
            valueA = valueB;
            valueB = "";
            displayValue = "";                       // indien waarde B niet leeg, en waarde A wel leeg, waardeA = WaardeB & Waarde B = leeg. 
        }      
    }  
}

function updateDisplay() {
    document.getElementById("display").innerHTML = displayValue;
}

function formatValue(disp) {
    if (disp.toString().length > 18) {
        console.log(disp);
        disp = disp.toExponential(6);
    }
    return disp;
}