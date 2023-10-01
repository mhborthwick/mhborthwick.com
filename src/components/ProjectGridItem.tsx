import { motion } from "framer-motion";

interface ProjectGridItemProps {
  project: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    imgUrl: string;
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
      <a href="#">
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
      <div>{project.title}</div>
      <div>{project.subtitle}</div>
    </div>
  );
}
