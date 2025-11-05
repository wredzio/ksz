import { ReactNode } from 'react';
import { Metadata } from 'next';

import { SanityPageHeader } from '@/components/cms/layout/sanity-page-header';
import { getNavigationData } from '@/sanity/sanity.client';

// import { getSettings } from '../../lib/sanity/studio/client';
// import { urlForImage } from '../../lib/sanity/studio/image';

export async function generateMetadata(): Promise<Metadata> {
  return {};
  // const settings = await getSettings();
  // return {
  //   metadataBase: settings?.url ? new URL(settings?.url) : null,
  //   title: {
  //     default: settings?.title ?? 'WBCars',
  //     template: '%s',
  //   },
  //   description: settings?.description || 'Auto detailing Tarnów',
  //   alternates: {
  //     canonical: settings?.url ? new URL(settings?.url) : null,
  //   },
  //   keywords: settings.keywords,
  //   authors: [{ name: 'Jakub Kosman Software Development' }, { name: 'Wojciech Szmidt' }],
  //   openGraph: {
  //     title: settings?.title,
  //     description: settings?.description,
  //     url: settings?.url,
  //     siteName: 'WBCars',
  //     images: [
  //       {
  //         url: urlForImage(settings?.openGraphImage)?.src || '/img/opengraph.jpg',
  //         width: 800,
  //         height: 600,
  //       },
  //     ],
  //     locale: 'pl_PL',
  //     type: 'website',
  //   },
  // };
}

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  // Fetch navigation data from Sanity
  const navigationData = await getNavigationData();

  return (
    <>
      {navigationData?.navigation && <SanityPageHeader data={navigationData} />}
      <main>{children}</main>
    </>
  );
}
