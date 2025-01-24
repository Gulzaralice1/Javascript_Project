const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const swapa = document.getElementById('swap');
const showError = document.getElementById('result');

function swapNumbers(){
    if(number1.value && number2.value) {
        swap();
    }else{
        console.log("Please enter the numbers");
        showError.textContent = "Please enter the numbers";
    }
}


function swap() {
    const temp = number1.value;
    console.log(number1.value);
    console.log(number2.value);
    console.log("Swapping numbers");

    number1.value = number2.value;
    number2.value = temp;

    console.log(number1.value);
    console.log(number2.value);
    console.log("Swapping numbers");
    number1.textContent = number1.value;
    number2.textContent = temp;
};