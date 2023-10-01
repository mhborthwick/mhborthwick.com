import { Navigation } from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-16 my-8">
      <Navigation />
      {children}
    </div>
  );
}
