import { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/lib/site-config";
import { getSettings } from "@/sanity/lib/get-settings";
import { getClient } from "@/sanity/sanity.client";
import { urlForImage } from "@/sanity/schemas/image";
import { pageQuery } from "@/sanity/schemas/pages/page.queries";

export async function buildPageMetadata(slugString: string): Promise<Metadata> {
  const client = getClient();
  const page = await client.fetch(pageQuery, { slug: slugString });
  const defaultSettings = await getSettings();

  const baseUrl = defaultSettings?.url || SITE_URL;
  const pageTitle =
    page?.metadata?.metaTitle ||
    page?.title ||
    defaultSettings?.title ||
    "KSZ — Tworzenie Stron Internetowych";
  const pageDescription =
    page?.metadata?.metaDescription ||
    defaultSettings?.description ||
    "Tworzymy nowoczesne strony internetowe. Profesjonalne rozwiązania webowe dla Twojego biznesu.";
  const pageKeywords = page?.metadata?.keywords?.length
    ? page.metadata.keywords
    : (defaultSettings?.keywords ?? []);
  const pageOgImage =
    page?.metadata?.ogImage || defaultSettings?.openGraphImage;

  return {
    metadataBase: new URL(baseUrl),
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: slugString,
    },
    keywords: pageKeywords,
    authors: [{ name: SITE_NAME }],
    robots: page?.metadata?.noIndex ? "noindex,nofollow" : "index,follow",
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: slugString,
      siteName: SITE_NAME,
      images: [
        {
          url: urlForImage(pageOgImage)?.src || "/img/opengraph.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "pl_PL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}
