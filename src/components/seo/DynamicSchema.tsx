"use client";

import { getWebPageSchemaForPath } from "@/lib/web-page-schema";
import { baseURL } from "@/resources/once-ui.config";
import { Schema } from "@once-ui-system/core";
import { usePathname } from "next/navigation";

/**
 * Once UI WebPage schema must match the current path (layout is shared across routes).
 */
export function DynamicSchema() {
  const pathname = usePathname() ?? "/";
  const fields = getWebPageSchemaForPath(pathname);

  return (
    <Schema
      as="webPage"
      baseURL={baseURL}
      title={fields.title}
      description={fields.description}
      path={fields.path}
    />
  );
}
