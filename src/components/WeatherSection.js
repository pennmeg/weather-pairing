import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

const WeatherSection = ({ weather }) => {
  const [loading, setLoading] = useState(true);

  const hasWeather = weather;

  useEffect(() => hasWeather && setLoading(false), [weather]);
  if (loading) return <p>Loading</p>;

  // const currentWeather = hasWeather && weather[1].current;
  // const locationDetails = hasWeather && weather[1].location;
  const forecast =  {"hourly": [
    {
      "time": "0",
      "temperature": 13,
      "weather_descriptions": [
          "Showers"
      ],
      "feelslike": 13,
      "uv_index": 0
    },
    {
      "time": "300",
      "temperature": 12,
      "weather_descriptions": [
          "Few Showers"
      ],
      "feelslike": 12,
      "uv_index": 0
    },
    {
      "time": "600",
      "temperature": 12,
      "weather_descriptions": [
          "Cloudy"
      ],
      "feelslike": 12,
      "uv_index": 0
    },
    {
      "time": "900",
      "temperature": 13,
      "weather_descriptions": [
          "Mostly Cloudy"
      ],
      "feelslike": 13,
      "uv_index": 1
    },
    {
      "time": "1200",
      "temperature": 17,
      "weather_descriptions": [
          "Partly Cloudy"
      ],
      "feelslike": 16,
      "uv_index": 6
    },
    {
      "time": "1500",
      "temperature": 18,
      "weather_descriptions": [
          "Mostly Cloudy"
      ],
      "feelslike": 17,
      "uv_index": 4
    },
    {
      "time": "1800",
      "temperature": 16,
      "weather_descriptions": [
        "Partly Cloudy"
      ],
      "feelslike": 15,
      "uv_index": 1
    },
    {
      "time": "2100",
      "temperature": 13,
      "weather_descriptions": [
          "Clear"
      ],
      "feelslike": 11,
      "uv_index": 0
    }]}
  
  return (
    <div className="weather-sections">
      <CurrentWeather />
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
