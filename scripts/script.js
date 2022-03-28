let weather = {
apiKey:"7cb628c80665c5072fa967f5bd91723a ",
fetchWeather: function (city) {
    fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
    .then((response) => {
        if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.");
        }
        return response.json();
    })
    .then((data) => this.displayWeather(data));
},


displayWeather: function (data) {
    const {name}   = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { country } = data.sys
    const { speed } = data.wind;
    
    // var today = new Date();
    // var currentTime = today.toLocaleTimeString();

    function calcTime(city, offset) {
        // create Date object for current location
        var d = new Date();
    
        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
        // create new Date object for different city
        // using supplied offset
        var nd = new Date(utc + (36000*offset));
    
        // return time as a string
        return  nd.toLocaleString();
    }
    
    // alert(calcTime('Bombay', '+5.5'));

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
    "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
    "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + "weather"  + "')";

    document.querySelector(".counrty").innerHTML = country;
    document.querySelector(".time").innerHTML = calcTime(name, '+5.5');
},

search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
},

};

document.querySelector(".search button").addEventListener("click", function () {
weather.search();
});

document.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
    weather.search();
    }
});

weather.fetchWeather("Accra");
