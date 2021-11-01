// Add CSS to HTML code
var searchInputEl = document.getElementById("search-input");
var searchButtonEl = document.getElementById("search-button");
var searchHistoryEl = document.getElementById("search-history");
var searchResultsEl = document.getElementById("search-results");
var weatherFormEl = document.getElementById("weather-form");
var weatherDataEl = document.getElementById("weather-data");
var fiveDayForecastEl = document.getElementById("five-day-forecast");
var forecastBoxesEl = document.getElementById("forecast-boxes");

// Search for City Input Data
var apiKey = "&appid=3378d404aa373dff507fddd9b837d09e";
var apiGeoURL = "http://api.openweathermap.org/geo/1.0/direct?q=";

searchButtonEl.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(searchInputEl.value);
  var searchURL = apiGeoURL + searchInputEl.value + apiKey;
  console.log(searchURL);
  fetch(searchURL).then(function (response) {
    console.log(response);
    response.json().then(function (data) {
      console.log(data);
      var cityGeoCoord = data[0];
      console.log(cityGeoCoord);
      var longitude = cityGeoCoord.lon;
      var latitude = cityGeoCoord.lat;
      getCityWeather(longitude, latitude);
      console.log(longitude);
      console.log(latitude);
    });
  });
});

// Retrieve Weather Data for Searched City
var getCityWeather = (longitude, latitude) 
var apiWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon" + longitude;
var weatherDataEl = apiWeatherUrl + apiKey;
   console.log(weatherDataEl)
fetch(weatherDataEl).then(function (response) {
  console.log(response);
  response.json().then(function(data) {
  console.log(data) 

});
});


//Display Retrieved Weather Data


// Save City Searches to Local Storage

// Retrieve Weather Data from Local Storage Input

// Show 5-Day Forecast

// Event Listeners for City Search and Local Storage Cities
