import AverageRankBarPlot from "../components/AverageRankBarPlot";
import TopThreeFinishesBarPlot from "../components/TopThreeFinishesBarPlot";

export default function Stats() {
  return (
    <div style={{ margin: "1%" }}>
      <h1>Stats</h1>
      <div>
        <AverageRankBarPlot />
      </div>
      <div>
        <TopThreeFinishesBarPlot />
      </div>
      {/* <div
        style={{
          height: 500,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid columns={columns} rows={rows} />
          </div>
        </div>
      </div> */}
    </div>
  );
}
