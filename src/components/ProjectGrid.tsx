interface ProjectGridProps {
  children: React.ReactNode;
}

export function ProjectGrid({ children }: ProjectGridProps) {
  return <div className="grid grid-cols-2 gap-x-8 gap-y-12">{children}</div>;
}
