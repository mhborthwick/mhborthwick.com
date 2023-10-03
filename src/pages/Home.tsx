import { PageContainer, ProjectGrid, ProjectGridItem } from "../components";

interface HomeProps {
  projects: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    imgUrl: string;
    pageUrl: string;
  }[];
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
