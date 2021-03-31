import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import store from "./store/store";
import { getWeather } from "./actions/weather";
import { Provider } from "react-redux";
import Header from "./components/Header";
import "./css/styles.css";
import WeatherSection from "./components/WeatherSection";

class App extends React.Component {
  componentDidMount() {
    axios.get("/weather").then((response) => {
      store.dispatch(getWeather(response.data));
    });
  }
  render() {
    return (
      <div className="main-section">
        <Header />
        <WeatherSection />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
