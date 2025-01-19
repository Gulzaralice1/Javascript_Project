const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('btn');
const loginMessage = document.getElementById('login-message');
let clickCount = 1;

submitButton.addEventListener('click', (event) => {
    console.log('Button clicked');
    console.log(`email: ${emailInput.value}`);
    console.log(`password: ${passwordInput.value}`);
    console.log(`Attempt: ${clickCount}`);
    event.preventDefault(); // Prevent form submission if the button is inside a form

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    // const adminEmail = 'mdgulzar.tech@gmail.com';
    // const adminUsername = 'alice';'a';
    // const adminPassword = '1234';
    const users = [
            { email: "user1", password: "1" },
            { email: "user2", password: "2" },
            { email: "admin", password: "admin" },
    ]

    const user = users.find(user => user.email === email && user.password === password);

    // Maximum attempt condition
    if (clickCount >= 5) {
        loginMessage.innerText = 'You have reached the maximum number of attempts';
        console.log(`Attempts reached: ${clickCount}`);
        submitButton.disabled = true; // Disable the button after max attempts
        return;
    }

    // Check if the email and password are empty
    if (email === '' || password === '') {
        loginMessage.innerText = 'Please enter email and password';
        return;
    }

    // Check if the email and password are correct
    // if ((email === adminEmail || email === adminUsername) && password === adminPassword) {
    if (user) {
        loginMessage.classList.add('successful-login');
        loginMessage.innerText = 'Login successful';
        console.log('Login successful');
        setTimeout(() => {
            alert('Redirecting to course page');
            window.location.href = 'course.html'; // Redirect to Google
        },0);
        return;
    } else {
        clickCount++;
        loginMessage.innerText = 'Login failed';
    }
});
