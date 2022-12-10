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
        width: 750,
        height: 500,
        title: "Average Rank",
        xaxis: { title: "Manager" },
        yaxis: { title: "Rank" },
        barmode: "stack",
      }}
    />
  );
}
