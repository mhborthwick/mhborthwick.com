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
        <motion.div
          variants={projectGridTransitionVariants}
          initial="onInitial"
          animate="onAnimate"
          exit="onExit"
          className="w-full h-full bg-cover bg-center bg-no-repeat before:block before:content-[''] before:pt-[66.66%]"
          style={{
            backgroundImage: `url(${project.imgUrl})`,
          }}
        ></motion.div>
      </a>
      <a href={project.pageUrl}>
        <div className="text-2xl font-bold">{project.title}</div>
      </a>
      <a href={project.pageUrl}>
        <div className="leading-loose font-semibold text-stone-600">
          {project.subtitle}
        </div>
      </a>
    </div>
  );
}
