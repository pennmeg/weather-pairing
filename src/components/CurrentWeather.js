import React from "react";

const CurrentWeather = ({ currentWeather, locationDetails }) => {
  return (
    <div className="current-weather-section">
      <div className="current-weather">
        {/* TODO: Image */}
        <p className="temperature">{currentWeather.temperature}&deg;C</p>
        <h2 className="noMarginBottom">{locationDetails.name}</h2>
        <p className='noMargin'>{locationDetails.region}</p>
        {/* TODO: <p>Date, time</p> */}
        <p>{currentWeather.weather_descriptions[0]}</p>
        <p>UV Index: {currentWeather.uv_index}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
