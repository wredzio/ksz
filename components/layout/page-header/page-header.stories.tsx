import type { Meta, StoryObj } from '@storybook/nextjs';

import { PageHeader } from './page-header';

const meta: Meta<typeof PageHeader> = {
  title: 'Layout/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

// Mock logo - using a placeholder until we have the actual logo
const mockLogo = {
  src: 'http://localhost:3845/assets/bc823674123ceca9699008e23bdefde71ac5b1b6.png',
  alt: 'WB Cars - Auto Detailing',
  width: 216,
  height: 64,
};

const mockNavLinks = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Zakres usług', href: '/zakres-uslug' },
  { label: 'Galeria', href: '/galeria' },
  { label: 'Kontakt', href: '/kontakt' },
];

/**
 * Default navigation header with standard links
 */
export const Default: Story = {
  args: {
    logo: mockLogo,
    navigationLinks: mockNavLinks,
  },
};

/**
 * Navigation with external link
 */
export const WithExternalLink: Story = {
  args: {
    logo: mockLogo,
    navigationLinks: [...mockNavLinks.slice(0, 3), { label: 'Blog', href: 'https://example.com/blog', external: true }],
  },
};

/**
 * Minimal navigation with fewer links
 */
export const MinimalLinks: Story = {
  args: {
    logo: mockLogo,
    navigationLinks: [
      { label: 'O nas', href: '/o-nas' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
  },
};

/**
 * Maximum navigation links (6 links as per validation)
 */
export const MaximumLinks: Story = {
  args: {
    logo: mockLogo,
    navigationLinks: [
      { label: 'O nas', href: '/o-nas' },
      { label: 'Zakres usług', href: '/zakres-uslug' },
      { label: 'Galeria', href: '/galeria' },
      { label: 'Cennik', href: '/cennik' },
      { label: 'Blog', href: '/blog' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
  },
};
