
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn")

let currentInput = "";
let result = "";

buttons.forEach((button) => {
    button.addEventListener("click",() =>{
        const value = button.textContent;
        console.log(value)
        display.textContent = value;

        if(value === "AC"){
            currentInput = "";
            result = "";
            display.textContent = "0";
        }else if(value === "DE"){
             // Delete the last character
             currentInput = currentInput.slice(0,-1);
             display.textContent = currentInput | "0";
        }else if(value === "="){
             // Evaluate the expression
             try{
                result = eval(currentInput);
                display.textContent = result;
                currentInput = result;
             }catch{
                display.textContent = "Error";
             }
        }else{
             // Append value to the current input
             currentInput += value;
             display.textContent = currentInput;
        }
    });
});