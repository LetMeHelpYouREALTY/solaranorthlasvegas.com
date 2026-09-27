import { serializeBreadcrumbListLd, type BreadcrumbSchemaItem } from "@/lib/schema";

type BreadcrumbJsonLdProps = {
  pagePath: string;
  items: BreadcrumbSchemaItem[];
};

/** Server-rendered BreadcrumbList — must match visible breadcrumb nav on the page. */
export function BreadcrumbJsonLd({ pagePath, items }: BreadcrumbJsonLdProps) {
  if (items.length < 2) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeBreadcrumbListLd(pagePath, items),
      }}
    />
  );
}
