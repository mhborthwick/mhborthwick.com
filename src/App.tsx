import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { Home, Project as ProjectPage } from "./pages";
import { projects } from "./assets/projects.json";
import { Project } from "./interfaces";
import { Layout } from "./components";

function getProjectById(id: number): Project {
  return projects.find((p) => p.id === id)!;
}

const myProjects = {
  portfolio: getProjectById(1),
  campfireCli: getProjectById(2),
  connectFour: getProjectById(3),
  loremIntl: getProjectById(4),
  songBook: getProjectById(5),
};

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home projects={projects} />,
    },
    {
      path: myProjects.portfolio.pageUrl,
      element: <ProjectPage project={myProjects.portfolio} />,
    },
    {
      path: myProjects.campfireCli.pageUrl,
      element: <ProjectPage project={myProjects.campfireCli} />,
    },
    {
      path: myProjects.connectFour.pageUrl,
      element: <ProjectPage project={myProjects.connectFour} />,
    },
    {
      path: myProjects.loremIntl.pageUrl,
      element: <ProjectPage project={myProjects.loremIntl} />,
    },
    {
      path: myProjects.songBook.pageUrl,
      element: <ProjectPage project={myProjects.songBook} />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <Layout>{React.cloneElement(element, { key: location.pathname })}</Layout>
  );
}

export default App;
