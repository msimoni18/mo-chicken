import data from "../data/historical_data";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "year", headerName: "Year", width: 70 },
  { field: "rank", headerName: "Rank", width: 70 },
  { field: "team", headerName: "Team", width: 180 },
  { field: "manager", headerName: "Manager", width: 80 },
  { field: "wins", headerName: "W", width: 50 },
  { field: "losses", headerName: "L", width: 50 },
  { field: "ties", headerName: "T", width: 50 },
  { field: "clinchedPlayoffs", headerName: "Clinched Playoffs", width: 130 },
  { field: "pointsFor", headerName: "PF", width: 80 },
  { field: "pointsAgainst", headerName: "PA", width: 80 },
  { field: "waiver", headerName: "Waiver", width: 80 },
  { field: "moves", headerName: "Moves", width: 80 },
  { field: "streak", headerName: "Streak", width: 80 },
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
      <div
        style={{
          height: 500,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              sx={{ color: "#d1d1d1d1" }}
              columns={columns}
              rows={rows}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
