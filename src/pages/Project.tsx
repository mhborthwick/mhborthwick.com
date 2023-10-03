import { PageContainer, ProjectBody, ProjectHeading } from "../components";
import { Project as ProjectInterface } from "../interfaces";

interface ProjectProps {
  project: ProjectInterface;
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
