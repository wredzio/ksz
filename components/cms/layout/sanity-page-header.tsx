import imageUrlBuilder from '@sanity/image-url';

import { NavigationQueryResult } from '@/components/cms/sanity-types';
import { PageHeader } from '@/components/layout/page-header/page-header';
import { dataset, projectId } from '@/sanity/sanity.api';

/**
 * SanityPageHeader - Adapter component that transforms Sanity CMS data
 * into props for the presentational PageHeader component
 */
export function SanityPageHeader({ data }: { data: NonNullable<NavigationQueryResult> }) {
  // Early return if navigation data is not available
  if (!data.navigation || !data.navigation.logo.asset) {
    return null;
  }

  const sanityBuilder = imageUrlBuilder({
    dataset,
    projectId,
  });

  // Transform Sanity logo data to component props
  const logo = {
    src: sanityBuilder
      .image(data.navigation.logo.asset)
      .width(432) // 2x for retina displays
      .height(128)
      .url(),
    alt: data.navigation.logo.alt,
    width: 216,
    height: 64,
  };

  // Transform navigation links
  const navigationLinks = (data.navigation.navigationLinks || []).map((link) => ({
    label: link.label,
    href: link.href,
    external: link.external || false,
  }));

  return <PageHeader logo={logo} navigationLinks={navigationLinks} />;
}
