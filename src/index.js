import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import forecast from "./data/forecast.json";
import iconData from "./data/iconData.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      location={forecast.location}
      forecasts={forecast.forecasts}
      weather={iconData.weather}
    />
  </React.StrictMode>,
);
