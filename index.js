let isDegreeMode = true
const display = document.getElementById("display");
const memoryStoreButton = document.getElementById('memory-store')
const memoryRecallButton = document.getElementById("memory-recall");
const memoryClearButton = document.getElementById("memory-clear");
const date = document.getElementById('date')

function addDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function sliceDisplay() {
    display.value = display.value.toString().slice(0,-1)
}

function memoryStore() {
    const currentResult = parseFloat(display.value);
    localStorage.setItem("calculatorMemory", currentResult)
}
function memoryRecall() {
    const storedResult = localStorage.getItem('calculatorMemory')
    if (storedResult) {
        display.value = storedResult; // Display the stored value
      }
}
function memoryClear() {
    localStorage.removeItem("calculatorMemory")
}

function date() {
    let date = new Date().getFullYear()
    return date()
}