        // toggle btn
        function toggle(){
            const body = document.querySelector('body');
            const btnToggle = document.querySelector('.btn-toggle');
            const outerDiv = document.getElementById("outer-div");
            const innerDiv = document.getElementById("inner-div")
            if(body.classList.contains('dark')) {
                body.classList.remove('dark');
                body.classList.add('bright');
                // outerDiv.style.backgroundColor = "#5b746d";
                innerDiv.classList.add("dark");
                outerDiv.classList.add("bright");
                outerDiv.style.backgroundColor = "#1c170a";
                innerDiv.style.backgroundColor = "#5b746d";

                btnToggle.style.marginLeft = '50px';
                btnToggle.style.marginRight = '0';
            } else {
                body.classList.remove('bright');
                body.classList.add('dark');
                btnToggle.style.marginRight = '50'
                btnToggle.style.marginLeft = '0';
                // innerDiv.classList.add("bright");
                // outerDiv.classList.add("dark");
                outerDiv.style.backgroundColor = "#5b746d";
                innerDiv.style.backgroundColor = "#1c170a";
                innerDiv.style.border = "1px solid rgb(122, 78, 78)";
            }
        }
        toggle();

        // Date time and 
        function updateTime(){
            const currentDate = document.getElementById('current-date');
            const currentTime = document.getElementById('current-time');
            const currentMonth = document.getElementById('current-month');
            const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const date = new Date();
            console.log(date);
            currentDate.textContent = `Date: ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
            currentTime.textContent = `Time: ${date.getHours()}:${date.getMinutes()}`;
            currentMonth.textContent = `Month: ${months[date.getMonth()]}`;
            setTimeout(updateTime, 1000);
        }
        updateTime();


// Countdown Timer
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

function Countdown() {
    let totalMinutes = 0;
    let totalSeconds = 0;
    let timer;
    
    increase.addEventListener('click', function() {
        totalMinutes++;
        minutes.textContent = totalMinutes;
    });

    decrease.addEventListener('click', function() {
        if (totalMinutes > 0) {
            totalMinutes--;
            minutes.textContent = totalMinutes;
        }
    });

    start.addEventListener("click", function() {
        if (minutes.textContent == 0 && seconds.textContent == 0) {
            return;
        } else if (totalMinutes > 0) {
            totalSeconds = 60;
            minutes.textContent = totalMinutes;
            seconds.textContent = totalSeconds;
            totalMinutes -= 1;
            minutes.textContent = totalMinutes;
        }
        seconds.textContent = totalSeconds;

        function secondDown() {
            if (totalSeconds === 0) {
                if (totalMinutes > 0) {
                    totalMinutes -= 1;
                    minutes.textContent = totalMinutes;
                    totalSeconds = 60;
                }
            }

            totalSeconds--;
            seconds.textContent = totalSeconds;
            
            if (totalMinutes >= 0 && (totalMinutes > 0 || totalSeconds > 0)) {
                setTimeout(secondDown, 1000);
            }
        }

        secondDown();
    });

    reset.addEventListener('click', function() {
        totalMinutes = 0;
        totalSeconds = 0;
        minutes.textContent = totalMinutes;
        seconds.textContent = totalSeconds;
    });
}

Countdown();
