import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: "Sun Jan 01 2023",
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders correctly", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />,
    );
    expect(getByText("Sun Jan 01 2023")).toHaveAttribute(
      "class",
      "forecast-summary__date",
    );
    expect(getByText("Stub description")).toHaveAttribute(
      "class",
      "forecast-summary__description",
    );
    expect(getByTestId("forecast-icon")).toHaveAttribute(
      "class",
      "forecast-summary__icon",
    );
    expect(getByText("22°C")).toHaveAttribute(
      "class",
      "forecast-summary__temperature",
    );
  });
});
