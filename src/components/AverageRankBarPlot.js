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
          marker: {
            color: "#3df730",
            opacity: 1,
          },
        },
      ]}
      layout={{
        width: 700,
        height: 400,
        title: "Average Rank",
        xaxis: { title: "Manager", gridcolor: "#3a3a3a" },
        yaxis: {
          title: "Rank",
          gridcolor: "#3a3a3a",
          rangemode: "nonnegative",
        },
        paper_bgcolor: "rgba(0, 0, 0, 0)",
        plot_bgcolor: "#262626",
        font: {
          color: "#d1d1d1d1",
        },
      }}
      config={{ responsive: true, staticPlot: true, displayModeBar: false }}
    />
  );
}
