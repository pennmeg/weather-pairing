import React from "react";

const ForecastWeather = ({ forecast }) => {
  // console.log("***", forecast['2015-01-21'].hourly)
  const hourly =  forecast['2015-01-21'].hourly

  return (
    <div className="forecast-weather-section">
      <p>Forecast goes here</p>
      {hourly.map((hour) => {
        return(
      <div className="main">
        <div className="time">
          {hour.time}
        </div>
        <div className="icon">
          {hour.weather_icons[0]}
        </div>
        <div className="temperature">
          {hour.temperature}
        </div>
        
      </div>
      )
})}
    </div>
  );
};

export default ForecastWeather;
