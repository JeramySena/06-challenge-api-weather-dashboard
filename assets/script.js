// Add CSS to HTML code
var citySearch = document.getElementById("#city-search");
var searchField = document.getElementById("#search-city");
var searchHistory = document.getElementById("#search-history");
var searchResults = document.getElementById("#search-results");
var weatherForm = document.getElementById("#weather-form");
var weatherData = document.getElementById("#weather-data");
var fiveDayForecast = document.getElementById("#five-day-forecast");
var forecastBoxes = document.getElementById("#forecast-boxes");

// Add Search for City Input Data
var searchCity = function(cityWeather) {
    var weather = cityWeather;
    var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?access_key=3378d404aa373dff507fddd9b837d09e&query=" + weather + "&limit=1";
    
    fetch(weatherAPI)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(location) {
                console.log(location, city);
                cityWeather(location, cityWeather);
            })
        } else {
            alert("Error: City not found.");
        }
    })
}

// Retrieve Weather Data for Searched City
var retrieveWeather = function (cityWeather) {
    var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?access_key=3378d404aa373dff507fddd9b837d09e&query=" + weather + "&limit=1";
    fetch(weatherAPI)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    displayWeather(data);
                });
            } else {
                alert("Error: City not found.");
            }
    })
}


