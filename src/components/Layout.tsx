import { AnimatePresence } from "framer-motion";
import { Navigation } from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-10 my-8 md:mx-16">
      <Navigation />
      <AnimatePresence
        mode="wait"
        // initial={false}
        // onExitComplete={() => console.log("exited")}
      >
        {children}
      </AnimatePresence>
    </div>
  );
}
