import { PageContainer, ProjectGrid, ProjectGridItem } from "../components";
import { projects } from "../assets/projects.json";

export function Home() {
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
