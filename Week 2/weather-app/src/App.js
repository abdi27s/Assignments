import React, { useState } from "react";

const api = {
  apiKey: "3de9f8d3365267c8c3cf0c932b83e059",
  apiLink: "https://api.openweathermap.org/data/2.5//weather?q=",
};

function App() {
  const [location, setLocation] = useState(""); //getting location value from user
  const [weather, setWeather] = useState({}); //getting data from api

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.apiLink}${location}&units=metric&APPID=${api.apiKey}`) //accessing api using the url and key
        .then((response) => response.json())
        .then((data) => {
          setWeather(data); //updating data from api
          setLocation(""); //clearing input field
          // console.log(data);
        });
    }
  };

  let date = String(new window.Date());
  //console.log(date);
  date = date.slice(0, 15); //using slice to get day to year from Mon Dec 21 2020 09:29:20 GMT+0545 (Nepal Time)
  //console.log(date);

  return (
    <div className="weatherApp">
      <main>
        <div className="search">
          <input
            className="searchBar"
            placeholder="Enter a City Name"
            onChange={(event) => setLocation(event.target.value)}
            value={location}
            onKeyPress={search}
          ></input>
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="locationDisplay">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="currentDate">{date}</div>
            </div>
            <div className="weatherData">
              <div className="temperature">{weather.main.temp}°C</div>
              <div className="weather">Weather: {weather.weather[0].main}</div>
              <div className="description">
                Sunrise:
                {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()} |
                Sunset:
                {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
