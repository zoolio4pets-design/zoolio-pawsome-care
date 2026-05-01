import { ReactNode } from "react";
import { PageShell } from "./PageShell";

interface Props {
  eyebrow: string;
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  children: ReactNode;
}

export const LegalPage = ({ eyebrow, title, intro, metaTitle, metaDescription, children }: Props) => (
  <PageShell title={metaTitle} description={metaDescription}>
    <section className="container-zoolio py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">{eyebrow}</span>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground tracking-tight">{title}</h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{intro}</p>
      </div>

      <article className="mt-14 max-w-3xl mx-auto bg-card border border-border/60 rounded-3xl shadow-soft p-8 md:p-12 space-y-10 text-foreground/90 leading-relaxed">
        {children}
      </article>

      <p className="mt-10 max-w-3xl mx-auto text-center text-sm text-muted-foreground">
        By continuing to use Zoolio, you acknowledge that you have read and understood this policy.
      </p>
    </section>
  </PageShell>
);

export const LegalSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section>
    <h2 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight">{title}</h2>
    <div className="mt-3 space-y-3 text-[15px] text-muted-foreground">{children}</div>
  </section>
);

export const LegalSubheading = ({ children }: { children: ReactNode }) => (
  <h3 className="mt-5 text-base font-semibold text-foreground">{children}</h3>
);

export const LegalList = ({ children }: { children: ReactNode }) => (
  <ul className="space-y-2 list-disc pl-5 marker:text-primary">{children}</ul>
);