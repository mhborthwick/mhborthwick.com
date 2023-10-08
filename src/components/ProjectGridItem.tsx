import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Project } from "../interfaces";

interface ProjectGridItemProps {
  project: Project;
}

export function ProjectGridItem({ project }: ProjectGridItemProps) {
  return (
    <div>
      <Link to={project.pageUrl}>
        <motion.div
          layoutId={`project-image-container-${project.id}`}
          className="w-full h-full bg-cover bg-center bg-no-repeat before:block before:content-[''] before:pt-[66.66%]"
          style={{
            backgroundImage: `url(${project.imgUrl})`,
          }}
        ></motion.div>
      </Link>
      <Link to={project.pageUrl}>
        <div className="text-2xl font-bold">{project.heading}</div>
      </Link>
      <Link to={project.pageUrl}>
        <div className="leading-loose font-semibold text-stone-600">
          {project.subHeading}
        </div>
      </Link>
    </div>
  );
}
