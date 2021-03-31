export const getWeather = (weather) => {
  return {
    type: "GET_WEATHER",
    weather,
  };
};
