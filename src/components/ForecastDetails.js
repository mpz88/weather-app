import React from "react";

function ForecastDetails(props) {
  const { forecast } = props;
  const { date, temperature, wind, humidity } = forecast;
  const formattedDate = new Date(date).toDateString();
  const { min, max } = temperature;
  const { speed, direction } = wind;

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details_temperature">
        {" "}
        <span className="max-temperature">{max}&deg;C</span>,{" "}
        <span className="min-temperature">{min}&deg;C</span>
      </div>
      <div className="forecast-details_wind">
        {" "}
        <span className="speed-wind">{speed}</span>,{" "}
        <span className="direction-wind">{direction}</span>
      </div>
      <div className="forecast-details_humidity">
        <span className="humidity">{humidity}%</span>
      </div>
    </div>
  );
}
export default ForecastDetails;
