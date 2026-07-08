import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SanityComponents } from "@/components/cms/sanity-components";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getClient } from "@/sanity/sanity.client";
import { pageQuery } from "@/sanity/schemas/pages/page.queries";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("/");
}

export default async function Page() {
  const slugString = "/";

  const client = getClient();
  const page = await client.fetch(pageQuery, { slug: slugString });

  if (!page) {
    notFound();
  }

  return (
    page.sections && (
      <SanityComponents pageType="page" sanityComponentsData={page.sections} />
    )
  );
}
