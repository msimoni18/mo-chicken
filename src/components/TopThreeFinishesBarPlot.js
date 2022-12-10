import React from "react";
import Plot from "react-plotly.js";
import data from "../data/top_three_finishes";

export default function TopThreeFinishesBarPlot() {
  return (
    <Plot
      data={[
        {
          x: data["MANAGER"],
          y: data["3rd"],
          type: "bar",
          name: "3rd",
        },
        {
          x: data["MANAGER"],
          y: data["2nd"],
          type: "bar",
          name: "2nd",
        },
        {
          x: data["MANAGER"],
          y: data["1st"],
          type: "bar",
          name: "1st",
        },
      ]}
      layout={{
        width: 750,
        height: 500,
        title: "Number of Top 3 Finishes",
        xaxis: { title: "Manager" },
        yaxis: { title: "Rank" },
        barmode: "stack",
      }}
    />
  );
}
