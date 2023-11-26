import { motion } from "framer-motion";
import { Project } from "../interfaces";

interface ProjectHeadingProps {
  project: Project;
}

const h2Variants = {
  initial: {
    opacity: 0,
    rotateX: 90,
    transformOrigin: "top",
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    transition: {
      ease: "easeOut",
      duration: 0.4,
      delay: 0.4,
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

const subHeadingVariants = {
  initial: {
    opacity: 0,
    y: 4,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.4,
      delay: 0.6,
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

export function ProjectHeading({ project }: ProjectHeadingProps) {
  return (
    <div className="relative md:flex md:items-start md:justify-start">
      <motion.img
        layoutId={`project-image-container-${project.id}`}
        className="w-full aspect-[4/3] object-cover brightness-50"
        src={project.imgUrl}
      />
      <div className="my-2 md:absolute md:m-4">
        <motion.h2
          variants={h2Variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-4xl md:text-6xl font-bold md:text-white"
        >
          {project.heading}
        </motion.h2>
        <motion.div
          variants={subHeadingVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="md:leading-loose font-semibold text-stone-600 md:text-white"
        >
          {project.subHeading}
        </motion.div>
      </div>
    </div>
  );
}
