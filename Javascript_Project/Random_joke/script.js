const display = document.getElementById('show');
async function joke(){
     const response = await fetch('https://api.chucknorris.io/jokes/random');
     const data = await response.json();
     display.innerHTML = data.value;
     console.log(data.value);
 }