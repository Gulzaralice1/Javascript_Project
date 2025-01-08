const searchInput = document.getElementById('searchInput');
const body = document.querySelector('body');

function changeColor(event) {
    event.preventDefault(); // Prevent form submission
    const color = searchInput.value.trim();
    
    if (!color) {
        alert("Please type a color!");
        return;
    }

    // Test if the color is valid by temporarily applying it
    const testElement = document.createElement('div');
    testElement.style.backgroundColor = color;
    if (testElement.style.backgroundColor) {
        body.style.backgroundColor = color;
    } else {
        alert("Invalid color");
    }
    searchInput.value = "";
}