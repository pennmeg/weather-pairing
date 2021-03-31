import { createStore } from "redux";
import weatherReducer from "../reducers/weather";

const store = createStore(weatherReducer);

store.subscribe(() => {
  console.log("store data:", store.getState());
});

export default store;
