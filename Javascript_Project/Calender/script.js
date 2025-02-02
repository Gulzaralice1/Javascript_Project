function updateTime(){
    const dateEl = document.getElementById("date");
    const dayEl = document.getElementById("day");
    const monthEl = document.getElementById("month");
    const yearEl = document.getElementById("year");
    const timeE1 = document.getElementById("time");
    const demo = document.getElementById("demo");

    
    const today = new Date();
    console.log(today);

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // const weekdayshow = weekdays[today.getDay()];

    dateEl.innerHTML = today.getDate();
    dayEl.innerHTML  = weekdays[today.getDay()];
    monthEl.innerHTML = months[today.getMonth()];
    yearEl.innerHTML = today.getFullYear();
    timeE1.innerHTML = today.toLocaleTimeString();
    setTimeout(updateTime, 1000);
}

let time = 0; // Time in seconds

function stopwatch() {
    time++; // Increment time by 1 second
    document.getElementById("demo").innerHTML = time; // Display seconds with leading zero
    setTimeout(stopwatch, 1000); // Call the function again after 1 second
}

function start() {
    if (time === 0) {
        stopwatch(); // Start the stopwatch only if not already running
    }
}
updateTime();