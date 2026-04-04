import { CalendlyShellStrip } from "@/components/calendly/CalendlyShellStrip";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="marketing-shell"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <SiteHeader />
      {children}
      <CalendlyShellStrip />
      <SiteFooter />
    </div>
  );
}
