import { motion } from "framer-motion";

interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return <motion.main>{children}</motion.main>;
}
