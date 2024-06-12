import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ResultPage from "./components/ResultPage/ResultPage";
import NavBar from "./components/NavBar/NavBar";
import CatPage from "./components/CatPage/CatPage";
import "./utils/axiosConfig";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/cat/:id" element={<CatPage />} />
      </Routes>
    </div>
  );
}

export default App;
