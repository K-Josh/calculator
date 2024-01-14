let isDegreeMode = true
const display = document.getElementById("display");

function addDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    let expression = display.value
    try{
        display.value = eval(display.value);
        let expression = document.getElementById("display").value;
        let radians = expression.endsWith("°") ? eval(expression.slice(0, -1)) * Math.PI / 180 : eval(expression);
        let result = Math.sin(radians); // Example using sine function
        document.getElementById("display").value = result;
    }
    catch(error){
        display.value = "Error";
    }
}

function toggleMode() {
    isDegreeMode = !isDegreeMode;
    document.getElementById("modeIndicator").textContent = isDegreeMode ? "Deg" : "Rad";
}

function sliceDisplay() {
    display.value = display.value.toString().slice(0,-1)
}