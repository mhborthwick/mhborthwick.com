import { AnimatePresence } from "framer-motion";
import { Navigation } from "./Navigation";
import { ScrollToTop } from "./ScrollToTop";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-10 my-8 md:mx-16">
      <Navigation />
      <ScrollToTop />
      <AnimatePresence
        mode="wait"
        // initial={false}
        // onExitComplete={() => console.log("exited")}
      >
        {children}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
