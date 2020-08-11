import React, { useState, useEffect } from "react";

import "./weather.scss";

const Weather = () => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const checkWeather = async () => {
      const actualWeather = await getWeather();
      setWeather(actualWeather);
    };
    checkWeather();
  }, []);

  function getWeather() {
    return Promise.resolve({ status: "Słonecznie", temp: "28" });
  }

  return (
    <div>
      {weather ? (
        <h2>
          Pogoda na dziś:
          <span className="weather-text">
            {weather.status}, {weather.temp} stopni !
          </span>
        </h2>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Weather;
