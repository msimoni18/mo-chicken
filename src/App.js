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

// function useWindowDimensions() {
//   const [width, setWidth] = React.useState(window.innerWidth);
//   const [height, setHeight] = React.useState(window.innerHeight);

//   const updateWidthAndHeight = () => {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   };

//   React.useEffect(() => {
//     window.addEventListener("resize", updateWidthAndHeight);
//     return () => window.removeEventListener("resize", updateWidthAndHeight);
//   });

//   return {
//     width,
//     height,
//   };
// }

// const App = () => {
//   const { width, height } = useWindowDimensions();

//   return (
//     <div>
//       <div className="App">
//         <h2>width: {width}</h2>
//         <h2>height: {height}</h2>
//         <p>Resize the window.</p>
//       </div>
//     </div>
//   );
// };

// export default App;
