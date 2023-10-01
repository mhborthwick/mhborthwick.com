import { PageContainer, ProjectGrid, ProjectGridItem } from "../components";
import { projects } from "../assets/projects.json";

export function Home() {
  return (
    <PageContainer>
      <ProjectGrid>
        {projects.map((p) => (
          <ProjectGridItem key={p.id} project={p} />
        ))}
      </ProjectGrid>
    </PageContainer>
  );
}
