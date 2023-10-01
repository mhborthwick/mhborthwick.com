import { Navigation } from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div style={{ border: "1px solid red" }}>
      <Navigation />
      {children}
    </div>
  );
}
