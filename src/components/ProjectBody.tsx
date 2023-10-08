import { motion } from "framer-motion";
import { Project } from "../interfaces";

interface ProjectBodyProps {
  project: Project;
}

const descriptionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    rotateX: 90,
    transition: {
      ease: "easeOut",
      duration: 0.2,
    },
  },
};

export function ProjectBody({ project }: ProjectBodyProps) {
  return (
    <motion.div
      variants={descriptionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-[800px] m-auto my-20 sm:mx-8"
    >
      {project.description}
    </motion.div>
  );
}
