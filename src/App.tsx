import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Other } from "./pages/Other";

function App() {
  return (
    <Router>
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
