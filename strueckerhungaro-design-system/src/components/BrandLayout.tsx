import type { ReactNode } from "react";

export function BrandLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
    </main>
  );
}
