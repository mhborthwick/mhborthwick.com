import { motion } from "framer-motion";

interface ProjectGridItemProps {
  project: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
  };
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
      <motion.main
        variants={projectGridTransitionVariants}
        initial="onInitial"
        animate="onAnimate"
        exit="onExit"
      >
        <div>{project.title}</div>
        <div>{project.subtitle}</div>
      </motion.main>
    </div>
  );
}
