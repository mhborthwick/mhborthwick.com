import { PageContainer, ProjectBody, ProjectHeading } from "../components";
import { Project as ProjectInterface } from "../interfaces";

interface ProjectProps {
  project: ProjectInterface;
}

export function Project({ project }: ProjectProps) {
  return (
    <PageContainer>
      <ProjectHeading project={project} />
      <ProjectBody project={project} />
    </PageContainer>
  );
}
