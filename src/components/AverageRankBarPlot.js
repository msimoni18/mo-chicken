import React from "react";
import Plot from "react-plotly.js";
// import { useWindowDimensions } from "../utils/resize";
import { useResizeDetector } from "react-resize-detector";
import data from "../data/average_rank";

// Create on resize detector instead of needed another package
// https://medium.com/hootsuite-engineering/resizing-react-components-6f911ba39b59

export default function AverageRankBarPlot() {
  // const { width, height } = useWindowDimensions();
  const { width, height, ref } = useResizeDetector();

  return (
    <div ref={ref} className="plot">
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
          width: width,
          // height: height,
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
          // autosize: true,
        }}
        config={{
          // autosizeable: true,
          // fillFrame: true,
          // responsive: true,
          staticPlot: true,
          displayModeBar: false,
        }}
      />
    </div>
  );
}
