import { motion } from "framer-motion";
import { Project } from "../interfaces";

interface ProjectHeadingProps {
  project: Project;
}

export function ProjectHeading({ project }: ProjectHeadingProps) {
  return (
    <div className="flex items-start justify-start relative">
      <motion.img
        className="w-full aspect-[4/3] object-cover"
        src={project.imgUrl}
      />
      <div className="absolute text-white m-4">
        <motion.h2 className="text-4xl font-bold">{project.title}</motion.h2>
        <motion.div className="text-sm">{project.subtitle}</motion.div>
      </div>
    </div>
  );
}
