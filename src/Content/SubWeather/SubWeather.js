import React from "react";
import "./Subweather.css";
import WeatherDetails from "../../Response format/weather.json";
console.log(WeatherDetails);
export const SubWeather = () => {
  return (
    <div className="subweather">
      <h3>Weather Details</h3>
      <ul className="subweather-grid">
        <li className="heading">Humidity</li>
        <li className="heading-details">
          {WeatherDetails.humidityinpercentage}
        </li>
        <li className="heading">Wind</li>
        <li className="heading-details">Speed : {WeatherDetails.wind} Km/h</li>
        <li className="heading">Sunrise and Sunset</li>
        <li className="heading-details">
          {WeatherDetails.sunrise.hours}:{WeatherDetails.sunrise.min}
          {WeatherDetails.sunrise.amorpm} &amp; {WeatherDetails.sunset.hours}:
          {WeatherDetails.sunset.min}
          {WeatherDetails.sunset.amorpm}
        </li>
        <li className="heading">Genral Location</li>
        <li className="heading-details">{WeatherDetails.generallocation}</li>
      </ul>
    </div>
  );
};
