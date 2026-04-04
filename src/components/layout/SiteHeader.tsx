"use client";

import { SITE_NAME } from "@/lib/site-contact";
import { Flex, Text } from "@once-ui-system/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/buyers", label: "Buyers" },
  { href: "/sellers", label: "Sellers" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/solara", label: "Solara" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="site-header">
      <Flex
        fillWidth
        horizontal="between"
        vertical="center"
        paddingX="20"
        paddingY="12"
        style={{ maxWidth: "56rem", margin: "0 auto", flexWrap: "wrap", gap: "0.75rem" }}
      >
        <Link href="/" style={{ textDecoration: "none", fontWeight: 700 }}>
          <Text variant="body-default-s">{SITE_NAME}</Text>
        </Link>
        <nav aria-label="Primary">
          <Flex gap="12" vertical="center" style={{ flexWrap: "wrap" }}>
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="site-nav-link"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: active ? 700 : 500,
                    textDecoration: "none",
                    opacity: active ? 1 : 0.85,
                    padding: "0.35rem 0.15rem",
                    minHeight: "44px",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </Flex>
        </nav>
      </Flex>
    </header>
  );
}
