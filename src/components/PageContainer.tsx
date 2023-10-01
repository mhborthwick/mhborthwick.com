import { motion } from "framer-motion";

type PageContainerProps = {
  children: React.ReactNode;
};

const pageContainerTransitionVariants = {
  onInitial: {},
  onAnimate: {
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  onExit: {
    transition: {
      ease: "easeOut",
      duration: 0.5,
      afterChildren: true,
    },
  },
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <motion.main
      variants={pageContainerTransitionVariants}
      initial="onInitial"
      animate="onAnimate"
      exit="onExit"
    >
      {children}
    </motion.main>
  );
}
