import { motion } from "framer-motion";
import { Project } from "../interfaces";

interface ProjectHeadingProps {
  project: Project;
}

export function ProjectHeading({ project }: ProjectHeadingProps) {
  return (
    <div className="relative md:flex md:items-start md:justify-start">
      <motion.img
        className="w-full aspect-[4/3] object-cover"
        src={project.imgUrl}
      />
      <div className="my-2 md:absolute md:text-white md:m-4">
        <motion.h2 className="text-4xl md:text-6xl font-bold">
          {project.title}
        </motion.h2>
        <motion.div className="text-sm">{project.subtitle}</motion.div>
      </div>
    </div>
  );
}
