import { PageContainer, ProjectBody, ProjectHeading } from "../components";
import { Project } from "../interfaces";

interface ProjectProps {
  project: Project;
}

export function Project({ project }: ProjectProps) {
  console.log(project);
  return (
    <PageContainer>
      <ProjectHeading />
      <ProjectBody />
    </PageContainer>
  );
}
