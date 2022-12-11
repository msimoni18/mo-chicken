import AverageRankBarPlot from "../components/AverageRankBarPlot";
import TopThreeFinishesBarPlot from "../components/TopThreeFinishesBarPlot";
import "../App.css";

export default function Stats() {
  return (
    <div className="app">
      <AverageRankBarPlot />
      <TopThreeFinishesBarPlot />
    </div>
  );
}
