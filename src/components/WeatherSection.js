import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

const WeatherSection = ({ weather }) => {
  const [loading, setLoading] = useState(true);

  const hasWeather = weather;

  useEffect(() => hasWeather && setLoading(false));
  if (loading) return <p>Loading</p>;

  const currentWeather = hasWeather && weather[1].current;
  const locationDetails = hasWeather && weather[1].location;
  const forecast = hasWeather && weather[1].forecast;

  return (
    <div className="weather-sections">
      <CurrentWeather
        currentWeather={currentWeather}
        locationDetails={locationDetails}
      />
      <ForecastWeather forecast={forecast} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state,
  };
};

export default connect(mapStateToProps)(WeatherSection);
