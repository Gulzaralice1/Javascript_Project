const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A8",
    "#A833FF", "#33FFF5", "#FF8C33", "#33FF8C", "#8C33FF",
    "#FF3333", "#33FF33", "#3333FF", "#FFFF33", "#FF33FF",
    "#33FFFF", "#FF6633", "#66FF33", "#3366FF", "#FF3366"
];

let interval;

function changeBackground() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}

function startChanging(time) {
    if (!interval) {
        interval = setInterval(changeBackground, time); // Change color every second
        console.log(message)
    }
}
function stopChanging() {
    clearInterval(interval);
    interval = null;
}