import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Other, Project as ProjectPage } from "./pages";
import { Layout } from "./components";
import { projects } from "./assets/projects.json";
import { Project } from "./interfaces";

function getProjectById(id: number): Project {
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
            element={<ProjectPage project={getProjectById(1)} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
