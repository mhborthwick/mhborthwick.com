interface ProjectGridProps {
  children: React.ReactNode;
}

export function ProjectGrid({ children }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-32 mb-52">
      {children}
    </div>
  );
}
