import AverageRankBarPlot from "../components/AverageRankBarPlot";
import TopThreeFinishesBarPlot from "../components/TopThreeFinishesBarPlot";

export default function Stats() {
  return (
    <div style={{ margin: "1%", width: "100%" }}>
      <h1>Stats</h1>
      <div style={{ textAlign: "center" }}>
        <div style={{ flexGrow: 1 }}>
          <AverageRankBarPlot />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ flexGrow: 1 }}>
          <TopThreeFinishesBarPlot />
        </div>
      </div>
    </div>
  );
}
