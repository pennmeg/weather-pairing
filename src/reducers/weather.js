const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return [state, action.weather];
  }
};

export default weatherReducer;
