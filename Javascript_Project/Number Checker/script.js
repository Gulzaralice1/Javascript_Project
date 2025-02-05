function isPrime(){
    let number = document.getElementById('numberInput').value;
    if(number === ""){
        result('Enter valid number! ')
    }
    if (number <= 1) return result('Not a prime number');

    for (let i = 2; i < number; i++){
        if (number % i === 0) return result('Not a prime number');
    }
    result('It is a prime number');
}


function primeList(){
    if(number === ""){
        result('Enter valid number! ')
    }
    let number = document.getElementById('numberInput').value;
    primeListStore = [];
    for(let i = 2; i <= number; i++){
        return result("Still i'm working on this logic! ");
    }
}

function evenOdd(){
    if(number === ""){
        result('Enter valid number! ')
    }
    let number = document.getElementById('numberInput').value;
    if(number % 2 === 0){
        return result("Even! ");
    }else{
        return result("Odd");
    }
}

function randomNumber(){
    if(number === ""){
        result('Enter valid number! ')
    }
    let random = Math.floor(Math.random() * 100);
    document.getElementById("numberInput").value = random;
}

function lengthOfNumber(){
    let number = document.getElementById("numberInput").value;
    let count = number.length; // Use .length to count digits in string format
    result("Length of number: " + count);
}
function result(message){
    document.getElementById('result').innerHTML = message;
}