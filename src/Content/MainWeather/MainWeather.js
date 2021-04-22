import React from "react";
import "./mainweather.css";
import WeatherDetails from "../../Response format/weather.json";
console.log(WeatherDetails.weather[0].id);
export const MainWeather = () => {
  return (
    <ul className="mainweatherbar ">
      <li className="mainweatherbar-temp">
        {WeatherDetails.temperatureindegree}
      </li>
      <li className="mainweatherbar-gnlocation">
        {WeatherDetails.generallocation}
      </li>
      <li className="mainweatherbar-icon">
        <img
          src={`http://openweathermap.org/img/wn/${WeatherDetails.weather[0].icon}@2x.png`}
          alt="weathericon"
        />
      </li>
      <li className="mainweatherbar-date">Monday 9th Sep 2021</li>
    </ul>
  );
};
