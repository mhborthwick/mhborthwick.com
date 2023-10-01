import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Other } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
