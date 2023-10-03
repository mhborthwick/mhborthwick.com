import { PageContainer, ProjectBody, ProjectHeading } from "../components";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    imgUrl: string;
    pageUrl: string;
  };
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
