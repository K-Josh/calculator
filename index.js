let isDegreeMode = true
const display = document.getElementById("display");
const memoryStoreButton = document.getElementById('memory-store')
const memoryRecallButton = document.getElementById("memory-recall");
const memoryClearButton = document.getElementById("memory-clear");


function addDisplay(input){
    // Add pressed inputs into the display screen
     display.textContent += input
};

//Limits the number of decimal points used
function addDecimal(input){
    if (!display.textContent.includes('.')) {
     addDisplay(input)

    }
};

function clearDisplay(){
    display.textContent =  ''
};

function calculate(){
    //Evaluate the string expression
    try{
          display.textContent = eval(display.textContent)  
    }
    catch(error){
        display.textContent = "Error";
    }}

function toggleMode() {
    isDegreeMode = !isDegreeMode;
    document.getElementById("modeIndicator").textContent = isDegreeMode ? "Deg" : "Rad";
}

function sliceDisplay() {
    //Delete a number
    display.textContent = display.textContent.slice(0,-1)
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