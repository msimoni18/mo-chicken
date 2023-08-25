import React from "react";
import Plot from "react-plotly.js";
import { useWindowDimensions } from "../utils/resize";
import { useResizeDetector } from "react-resize-detector";
import data from "../data/top_three_finishes";

export default function TopThreeFinishesBarPlot() {
  // const { width, height } = useWindowDimensions();
  const { width, height, ref } = useResizeDetector();

  console.log(data)

  return (
    <div ref={ref} className="plot">
      <Plot
        data={[
          {
            x: data["MANAGER"],
            y: data["3rd"],
            type: "bar",
            name: "3rd",
            marker: {
              color: "#e61e21",
              opacity: 1,
            },
          },
          {
            x: data["MANAGER"],
            y: data["2nd"],
            type: "bar",
            name: "2nd",
            marker: {
              color: "#1EB4E6",
              opacity: 1,
            },
          },
          {
            x: data["MANAGER"],
            y: data["1st"],
            type: "bar",
            name: "1st",
            marker: {
              color: "#3df730",
              opacity: 1,
            },
          },
        ]}
        layout={{
          width: width,
          // height: height,
          title: "Number of Top 3 Finishes",
          xaxis: { title: "Manager", gridcolor: "#3a3a3a" },
          yaxis: {
            title: "Rank",
            gridcolor: "#3a3a3a",
            rangemode: "nonnegative",
          },
          barmode: "stack",
          paper_bgcolor: "rgba(0, 0, 0, 0)",
          plot_bgcolor: "#262626",
          font: {
            color: "#d1d1d1d1",
          },
          // autosize: true,
        }}
        config={{
          // autosizable: true,
          // fillFrame: true,
          // responsive: true,
          staticPlot: true,
          displayModeBar: false,
        }}
      />
    </div>
  );
}
