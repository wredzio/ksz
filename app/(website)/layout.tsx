import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import {
  CONTACT_EMAILS,
  CONTACT_PHONES,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site-config";

import { SiteLayout } from "../../components/layout/site-layout";
import { getNavigationData } from "../../sanity/sanity.client";

interface LayoutProps {
  children: ReactNode;
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Tworzymy nowoczesne, szybkie strony internetowe dla firm. Projektowanie, development i wdrożenia — Next.js, React, Sanity CMS.",
  email: CONTACT_EMAILS[0],
  telephone: CONTACT_PHONES[0].replaceAll(" ", ""),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: CONTACT_EMAILS[0],
    telephone: CONTACT_PHONES[0].replaceAll(" ", ""),
    availableLanguage: ["Polish"],
  },
};

export default async function Layout({ children }: LayoutProps) {
  const navigationData = await getNavigationData();

  const navigationLinks = (
    navigationData?.navigation?.navigationLinks ?? []
  ).map((link) => ({
    label: link.label,
    href: link.href,
    external: link.external || false,
  }));

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <SiteLayout.Header navigationLinks={navigationLinks} />
      <SiteLayout.Main>{children}</SiteLayout.Main>
      <SiteLayout.Footer />
      <Analytics />
    </SiteLayout>
  );
}
