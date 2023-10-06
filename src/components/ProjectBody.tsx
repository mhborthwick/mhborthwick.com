import { Project } from "../interfaces";

interface ProjectBodyProps {
  project: Project;
}

export function ProjectBody({ project }: ProjectBodyProps) {
  return (
    <div className="max-w-[800px] m-auto my-20 sm:mx-8">
      {project.description}
    </div>
  );
}
