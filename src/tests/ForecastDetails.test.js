import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    forecast: {
      date: "Mon Apr 30 2018",
      temperature: {
        min: 4,
        max: 11,
      },
      wind: {
        speed: 13,
        direction: "s",
      },
      humidity: 30
    },
  };

  it("renders correctly", () => {
    const { getByText } = render(
      <ForecastDetails forecast={validProps.forecast} />,
    );
    expect(getByText("Mon Apr 30 2018")).toHaveAttribute(
      "class",
      "forecast-details__date",
    );
    expect(getByText("11°C")).toHaveAttribute("class", "max-temperature");
    expect(getByText("4°C")).toHaveAttribute("class", "min-temperature");
    expect(getByText("13")).toHaveAttribute("class", "speed-wind");
    expect(getByText("s")).toHaveAttribute("class", "direction-wind");
    expect(getByText("30%")).toHaveAttribute("class", "humidity");
  });
});
