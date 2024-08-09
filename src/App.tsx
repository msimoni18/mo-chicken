import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Statistics />} />
      </Route>
    </Routes>
  );
}

export default App;
