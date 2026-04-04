"use client";

import { AGENT, CONTACT_EMAILS, SITE_NAME, SITE_ORIGIN } from "@/lib/site-contact";
import { Badge, Button, Column, Heading, Line, Logo, Text } from "@once-ui-system/core";
import Link from "next/link";

export function HomeHero() {
  const mailPrimary = `mailto:${CONTACT_EMAILS.drDuffy}`;

  return (
    <Column as="main" id="page-top" fillWidth center padding="l" style={{ minHeight: "70vh" }}>
      <Column maxWidth="s" horizontal="center" gap="l" align="center">
        <Badge
          textVariant="code-default-s"
          border="neutral-alpha-medium"
          onBackground="neutral-medium"
          vertical="center"
          gap="16"
        >
          <Logo dark icon="/trademarks/wordmark-dark.svg" href={SITE_ORIGIN} size="xs" />
          <Logo light icon="/trademarks/wordmark-light.svg" href={SITE_ORIGIN} size="xs" />
          <Line vert background="neutral-alpha-strong" />
          <Text marginX="4">{SITE_NAME}</Text>
        </Badge>
        <Heading as="h1" variant="display-strong-xl" marginTop="24">
          North Las Vegas real estate with Dr. Jan Duffy
        </Heading>
        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="8"
        >
          Local expertise for North Las Vegas and the Las Vegas Valley — buying, selling, and
          strategy with Berkshire Hathaway HomeServices Nevada Properties.
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="16" wrap="balance">
          Explore{" "}
          <Link href="/solara" style={{ textDecoration: "underline", fontWeight: 600 }}>
            Solara new construction in North Las Vegas
          </Link>{" "}
          (Lennar community overview + independent REALTOR guidance).
        </Text>
        <Column horizontal="center" gap="8">
          <Button
            id="email-primary"
            href={mailPrimary}
            data-border="rounded"
            weight="default"
            arrowIcon
          >
            Email Dr. Jan Duffy
          </Button>
          <Button
            id="email-listings"
            href={`mailto:${CONTACT_EMAILS.drDuffySells}`}
            data-border="rounded"
            weight="default"
          >
            Email listings team
          </Button>
        </Column>
        <Text variant="body-default-s" onBackground="neutral-weak" marginTop="12" wrap="balance">
          Nevada license {AGENT.licenseNumber} · {AGENT.brokerage}
        </Text>
      </Column>
    </Column>
  );
}
