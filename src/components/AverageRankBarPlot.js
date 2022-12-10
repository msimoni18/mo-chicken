import React from "react";
import Plot from "react-plotly.js";
import data from "../data/average_rank";

export default function AverageRankBarPlot() {
  return (
    <Plot
      data={[
        {
          x: data["MANAGER"],
          y: data["RANK"],
          type: "bar",
        },
      ]}
      layout={{
        width: 700,
        height: 400,
        title: "Average Rank",
        xaxis: { title: "Manager" },
        yaxis: { title: "Rank" },
        barmode: "stack",
      }}
      config={{ responsive: true, staticPlot: true, displayModeBar: false }}
    />
  );
}
