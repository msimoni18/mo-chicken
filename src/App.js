import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Stats from "./routes/Stats";
import HistoricalData from "./routes/HistoricalData";
import theme from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Stats />} />
          <Route path="/historical-data" element={<HistoricalData />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
