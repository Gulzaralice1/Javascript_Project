const passwordBox = document.getElementById('password_show');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');
const copyIcone = document.querySelector('#copy');
const length = 6;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*';

const allchars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    
    passwordBox.textContent = password;
}

function copyPassword(){
    const passwordToCopy = passwordBox.textContent;
    navigator.clipboard.writeText(passwordToCopy)
        .then(() => {
            console.log("Password copied");
        })
        .catch(err => {
            console.error("Failed to copy password: ", err);
        });
}

generateButton.addEventListener('click', () => {
    createPassword();
    console.log(passwordBox.textContent);
    console.log("Generate button clicked");
    copyIcone.src = "images/copy.png";
});

copyButton.addEventListener('click', () => {
    copyPassword();
    console.log("Copy button clicked");
    copyIcone.src = "https://media.istockphoto.com/id/1094780808/vector/approval-symbol-check-mark-in-a-circle-drawn-by-hand-vector-green-sign-ok-approval-or.jpg?s=612x612&w=0&k=20&c=0mlB50r769kHmLkVcq_HpdNFGdHIA_Cu_tPqN4IKZbc=";
});