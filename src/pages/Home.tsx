import { PageContainer, ProjectGrid, ProjectGridItem } from "../components";
import { Project } from "../interfaces";

interface HomeProps {
  projects: Project[];
}

export function Home({ projects }: HomeProps) {
  const reversed = [...projects].reverse();
  return (
    <PageContainer>
      <ProjectGrid>
        {reversed.map((p) => (
          <ProjectGridItem key={p.id} project={p} />
        ))}
      </ProjectGrid>
    </PageContainer>
  );
}
