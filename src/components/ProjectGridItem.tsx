import { motion } from "framer-motion";
import { Project } from "../interfaces";

interface ProjectGridItemProps {
  project: Project;
}

const projectGridTransitionVariants = {
  onInitial: {
    opacity: 0,
  },
  onAnimate: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  onExit: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      afterChildren: true,
    },
  },
};

export function ProjectGridItem({ project }: ProjectGridItemProps) {
  return (
    <div>
      <a href={project.pageUrl}>
        <motion.main
          variants={projectGridTransitionVariants}
          initial="onInitial"
          animate="onAnimate"
          exit="onExit"
          className="w-full h-full bg-cover bg-center bg-no-repeat before:block before:content-[''] before:pt-[66.66%]"
          style={{
            backgroundImage: `url(${project.imgUrl})`,
          }}
        ></motion.main>
      </a>
      <a href={project.pageUrl}>
        <div>{project.title}</div>
      </a>
      <a href={project.pageUrl}>
        <div>{project.subtitle}</div>
      </a>
    </div>
  );
}
