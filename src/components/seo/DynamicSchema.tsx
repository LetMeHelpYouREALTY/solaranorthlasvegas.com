"use client";

import { SOLARA_SCHEMA_DESCRIPTION, SOLARA_SCHEMA_TITLE } from "@/lib/solara-page";
import { baseURL, meta } from "@/resources/once-ui.config";
import { Schema } from "@once-ui-system/core";
import { usePathname } from "next/navigation";

/**
 * Once UI WebPage schema must match the current path (layout is shared across routes).
 */
export function DynamicSchema() {
  const pathname = usePathname() ?? "/";

  if (pathname === "/solara") {
    return (
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={SOLARA_SCHEMA_TITLE}
        description={SOLARA_SCHEMA_DESCRIPTION}
        path="/solara"
      />
    );
  }

  return (
    <Schema
      as="webPage"
      baseURL={baseURL}
      title={meta.home.title}
      description={meta.home.description}
      path={meta.home.path}
    />
  );
}
