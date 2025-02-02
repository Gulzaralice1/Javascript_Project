function updateTime(){
    const dateEl = document.getElementById("date");
    const dayEl = document.getElementById("day");
    const monthEl = document.getElementById("month");
    const yearEl = document.getElementById("year");
    const timeE1 = document.getElementById("time");

    
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
updateTime();