import React, { useEffect } from "react";

const ForecastWeather = ({ forecast }) => {
  // console.log("***", forecast['2015-01-21'].hourly)
  console.log('000', forecast)
  if (forecast.length === 0) return <div>Loading</div>;
  

  return (
    <div className="forecast-weather-section">
      <p>Forecast goes here</p>
      {forecast.map((hour) => {
        return(
      <div className="main">
        <div className="time">
          {hour.time}
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
