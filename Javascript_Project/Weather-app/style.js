const apiKey = "8fdaf710f0638817ab78191c8956ac56";
// Corrected API URL with dynamic city input
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcone = document.querySelector(".weatherIcone")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    // Populate the data in the HTML
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcone.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcone.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcone.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcone.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcone.src = "images/drizzle.png";
    }
    

    document.querySelector(".weather").style.display = "block";
}

// Trigger the checkWeather function when the search button is clicked
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
