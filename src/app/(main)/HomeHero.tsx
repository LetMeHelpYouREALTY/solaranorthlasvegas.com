"use client";

import { CalendlyPopupLink } from "@/components/calendly/CalendlyPopupLink";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AGENT, CONTACT_EMAILS, SITE_NAME } from "@/lib/site-contact";
import { Badge, Button, Column, Heading, Line, Logo, Text } from "@once-ui-system/core";
import Link from "next/link";

export function HomeHero() {
  const mailPrimary = `mailto:${CONTACT_EMAILS.drDuffy}`;

  return (
    <Column as="main" id="page-top" fillWidth padding="0" className="home-hero-stack">
      <SiteHeader />
      <Column fillWidth center padding="l" style={{ flex: 1 }}>
        <div className="home-hero-surface">
          <Column fillWidth horizontal="center" gap="l" align="center">
            <Badge
              textVariant="code-default-s"
              border="neutral-alpha-medium"
              onBackground="neutral-medium"
              vertical="center"
              gap="16"
            >
              <Logo dark icon="/trademarks/wordmark-dark.svg" href="/" size="xs" />
              <Logo light icon="/trademarks/wordmark-light.svg" href="/" size="xs" />
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
            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              marginBottom="16"
              wrap="balance"
            >
              Curious about{" "}
              <Link href="/solara" style={{ textDecoration: "underline", fontWeight: 600 }}>
                new construction in North Las Vegas (including the Solara area)
              </Link>
              ? Dr. Jan Duffy can walk you through what to expect—separate from the builder’s sales
              team.
            </Text>
            <div className="home-hero-cta-group">
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
                id="contact-cta"
                href="/contact"
                data-border="rounded"
                weight="default"
              >
                Contact
              </Button>
              <Button
                id="neighborhoods-cta"
                href="/neighborhoods"
                data-border="rounded"
                weight="default"
              >
                Neighborhoods
              </Button>
              <CalendlyPopupLink className="home-hero-calendly-cta">
                Schedule 15 min with Dr. Jan Duffy
              </CalendlyPopupLink>
            </div>
            <Text variant="body-default-s" onBackground="neutral-weak" marginTop="4" wrap="balance">
              Listings support:{" "}
              <a href={`mailto:${CONTACT_EMAILS.drDuffySells}`} style={{ fontWeight: 600 }}>
                {CONTACT_EMAILS.drDuffySells}
              </a>
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak" marginTop="12" wrap="balance">
              Nevada license {AGENT.licenseNumber} · {AGENT.brokerage}
            </Text>
          </Column>
        </div>
      </Column>
    </Column>
  );
}
