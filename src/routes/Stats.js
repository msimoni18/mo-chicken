import AverageRankBarPlot from "../components/AverageRankBarPlot";
import TopThreeFinishesBarPlot from "../components/TopThreeFinishesBarPlot";
import "../App.css";
import { Typography } from "@mui/material";

export default function Stats() {
  return (
    <div className="app">
      <div className="page">
        <div>
          <AverageRankBarPlot />
        </div>
        <div>
          <TopThreeFinishesBarPlot />
        </div>
      </div>
    </div>
  );
}
