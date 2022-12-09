import data from "../data";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "year", headerName: "Year", width: 130 },
  { field: "rank", headerName: "Rank", width: 130 },
  { field: "team", headerName: "Team", width: 130 },
  { field: "manager", headerName: "Manager", width: 130 },
  { field: "wins", headerName: "W", width: 130 },
  { field: "losses", headerName: "L", width: 130 },
  { field: "ties", headerName: "T", width: 130 },
  { field: "clinchedPlayoffs", headerName: "Clinched Playoffs", width: 130 },
  { field: "pointsFor", headerName: "PF", width: 130 },
  { field: "pointsAgainst", headerName: "PA", width: 130 },
  { field: "waiver", headerName: "Waiver", width: 130 },
  { field: "moves", headerName: "Moves", width: 130 },
  { field: "streak", headerName: "Streak", width: 130 },
];

export default function HistoricalData() {
  const rows = data.map((row, index) => {
    return {
      id: index,
      year: row["YEAR"],
      rank: row["RANK"],
      team: row["TEAM"],
      manager: row["MANAGER"],
      wins: row["W"],
      losses: row["L"],
      ties: row["T"],
      clinchedPlayoffs: row["CLINCHED_PLAYOFFS"],
      pointsFor: row["PTS_FOR"],
      pointsAgainst: row["PTS_AGNST"],
      waiver: row["WAIVER"],
      moves: row["MOVES"],
      streak: row["STREAK"],
    };
  });

  return (
    <div style={{ margin: "1%" }}>
      <h1>Historical Data</h1>
      <div
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
      </div>
    </div>
  );
}
