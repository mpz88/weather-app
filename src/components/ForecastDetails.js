import React from "react";

function ForecastDetails({ forecast }) {
  const { date, temperature, humedity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();
  return (
    <>
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast_temperature">
        {" "}
        {(temperature.max, temperature.min)}
        &deg;C
      </div>
      <div className="forecast_humedity"> {humedity}</div>
      <div className="forecast_wind"> {(wind.speed, wind.direction)}</div>
    </>
  );
}
export default ForecastDetails;
