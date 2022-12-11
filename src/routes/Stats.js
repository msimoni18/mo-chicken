import * as React from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
import AverageRankBarPlot from "../components/AverageRankBarPlot";
import TopThreeFinishesBarPlot from "../components/TopThreeFinishesBarPlot";
import "../App.css";

const activeManagers = [
  "AK",
  "Burg",
  "Ciggy",
  "Jake",
  "Marsh",
  "Masi",
  "Moni",
  "Shoey",
  "Stew",
  "Zach",
];

export default function Stats() {
  // const [managerSelect, setManagerSelect] = React.useState("active");
  // const [useActiveManagers, setUseActiveManagers] = React.useState(true);

  // const handleChange = (event) => {
  //   setManagerSelect(event.target.value);
  //   setUseActiveManagers(!useActiveManagers);
  // };

  return (
    <div className="app">
      {/* <div style={{ marginTop: "1%" }}>
        <FormControl>
          <RadioGroup
            value={managerSelect}
            name="radio-buttons-group"
            row
            onChange={handleChange}
          >
            <FormControlLabel
              value="active"
              control={<Radio />}
              label="Active Managers Only"
            />
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="All Managers"
            />
          </RadioGroup>
        </FormControl>
      </div> */}
      <AverageRankBarPlot managers={activeManagers} useActiveManagers />
      <TopThreeFinishesBarPlot managers={activeManagers} useActiveManagers />
    </div>
  );
}
