import { Metadata } from "next";
import { notFound } from "next/navigation";

import { RichText } from "@/components/cms/shared/rich-text/rich-text";
import { PageSection } from "@/components/layout/page-section/page-section";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";
import { getClient } from "@/sanity/sanity.client";
import { privacyPolicyQuery } from "@/sanity/schemas/settings.queries";

export const revalidate = 60;

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: `Polityka prywatności — ${SITE_NAME}`,
    description:
      "Informacja o przetwarzaniu danych osobowych na stronie KSZ — dane z formularza kontaktowego, analityka i prawa użytkownika.",
    alternates: { canonical: "/polityka-prywatnosci" },
  };
}

export default async function PrivacyPolicyPage() {
  const client = getClient();
  const data = await client.fetch(privacyPolicyQuery);
  const policy = data?.privacyPolicy;

  if (!policy || policy.length === 0) {
    notFound();
  }

  return (
    <PageSection className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-syne mb-8 text-3xl font-bold text-foreground md:text-4xl">
          Polityka prywatności
        </h1>
        <div className="font-dm-sans leading-relaxed text-muted-foreground [&_h2]:font-syne [&_h2]:mt-10 [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground">
          <RichText value={policy} />
        </div>
      </div>
    </PageSection>
  );
}
