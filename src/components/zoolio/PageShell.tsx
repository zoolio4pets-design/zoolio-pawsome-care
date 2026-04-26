import { ReactNode, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface Props {
  title: string;
  description?: string;
  children: ReactNode;
}

export const PageShell = ({ title, description, children }: Props) => {
  useEffect(() => {
    document.title = `${title} — Zoolio`;
    if (description) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
      }
      m.setAttribute("content", description);
    }
    window.scrollTo({ top: 0 });
  }, [title, description]);

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
};