function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;

    if (!birthdateInput) {
        document.getElementById("result").innerText = "Please select your birthdate.";
        return;
    }

    // birth date
    const birthdate = new Date(birthdateInput);

    // current date
    const today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth()+1 - birthdate.getMonth()+1;
    let days = today.getDate() - birthdate.getDate();


    document.getElementById("result").innerText = `You are ${years} years, ${months} months and ${days} days old.`;
}