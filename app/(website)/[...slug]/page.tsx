import { notFound } from 'next/navigation';

import { SanityComponents } from '@/components/cms/sanity-components';
import type { PageQueryResult } from '@/components/cms/sanity-types';
import { getClient } from '@/sanity/sanity.client';
import { pageQuery } from '@/sanity/schemas/pages/page.queries';

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const slugString = slug ? `/${slug.join('/')}` : '/';

  const client = getClient();
  const page = await client.fetch<PageQueryResult>(pageQuery, { slug: slugString });

  if (!page) {
    notFound();
  }

  return page.sections && <SanityComponents pageType='page' sanityComponentsData={page.sections} />;
}
