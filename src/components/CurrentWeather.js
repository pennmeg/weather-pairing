import React from "react";

const CurrentWeather = () => {
  return (
    <div className="current-weather-section">
      <div className="current-weather">
        {/* TODO: Image */}
        <p className="temperature">16&deg;C</p>
        <h2 className="noMarginBottom">Washington</h2>
        <p className='noMargin'>District of Columbia</p>
        {/* TODO: <p>Date, time</p> */}
        <p>Rain Shower</p>
        <p>UV Index: 3</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
