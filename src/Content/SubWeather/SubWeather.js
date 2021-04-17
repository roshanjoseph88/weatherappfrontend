import React from "react";
import "./Subweather.css";
export const SubWeather = () => {
  return (
    <div className="subweather">
      <h3>Weather Details</h3>
      <ul className="subweather-grid">
        <li className="heading">Humidity</li>
        <li className="heading-details">81%</li>
        <li className="heading">Wind</li>
        <li className="heading-details">Speed : 6.44 Km/h</li>
        <li className="heading">Sunrise and Sunset</li>
        <li className="heading-details">6.30 am 6.30 am</li>
        <li className="heading">Genral Location</li>
        <li className="heading-details">Bacolod City</li>
      </ul>
    </div>
  );
};
