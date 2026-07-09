import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SanityComponents } from "@/components/cms/sanity-components";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getClient } from "@/sanity/sanity.client";
import { pageQuery } from "@/sanity/schemas/pages/page.queries";

// ISR: re-fetch Sanity content at most once per minute so CMS edits
// appear without a manual redeploy
export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugString = slug ? `/${slug.join("/")}` : "/";

  return buildPageMetadata(slugString);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const slugString = slug ? `/${slug.join("/")}` : "/";

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
