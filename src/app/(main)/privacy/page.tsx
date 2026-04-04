import { MarketingShell } from "@/components/layout/MarketingShell";
import { MarketingArticle } from "@/components/sections/MarketingArticle";
import { buildSubpageMetadata } from "@/lib/metadata";
import { PRIMARY_CONTACT_EMAIL, SITE_HOSTNAME, SITE_NAME } from "@/lib/site-contact";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return buildSubpageMetadata({
    titleAbsolute: "Privacy policy",
    description: `Privacy policy for ${SITE_NAME} (${SITE_HOSTNAME}) — contact data and site usage.`,
    path: "/privacy",
    keywords: ["privacy policy", SITE_HOSTNAME],
  });
}

export default function PrivacyPage() {
  return (
    <MarketingShell>
      <MarketingArticle
        breadcrumbCurrent="Privacy"
        h1="Privacy policy"
        lead={`This page describes how ${SITE_NAME} handles information you share through this website. It is not legal advice; consult an attorney for your specific situation.`}
      >
        <section aria-labelledby="collect-heading">
          <h2 id="collect-heading">Information you may provide</h2>
          <p>
            If you email us, we receive your email address and any details you include. We use that
            information to respond and to provide real estate–related services you request.
          </p>
        </section>
        <section aria-labelledby="use-heading">
          <h2 id="use-heading">How we use information</h2>
          <p>
            We use contact details to communicate with you about real estate inquiries. We do not
            sell your personal information.
          </p>
        </section>
        <section aria-labelledby="third-heading">
          <h2 id="third-heading">Third-party services</h2>
          <p>
            This site may use standard hosting, analytics, or form providers configured for the
            property. Those providers have their own privacy terms.
          </p>
        </section>
        <section aria-labelledby="contact-privacy-heading">
          <h2 id="contact-privacy-heading">Questions</h2>
          <p>
            Contact <a href={`mailto:${PRIMARY_CONTACT_EMAIL}`}>{PRIMARY_CONTACT_EMAIL}</a> for
            privacy-related questions about this site.
          </p>
        </section>
      </MarketingArticle>
    </MarketingShell>
  );
}
