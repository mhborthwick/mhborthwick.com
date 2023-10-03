import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Other, Project } from "./pages";
import { Layout } from "./components";
import { projects } from "./assets/projects.json";

function getProjectById(id: number) {
  return projects.find((p) => p.id === id)!;
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home projects={projects} />} />
          <Route path="/other" element={<Other />} />
          <Route
            path="/projects/portfolio"
            element={<Project project={getProjectById(1)} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
