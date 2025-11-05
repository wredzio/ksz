import type { Meta, StoryObj } from '@storybook/nextjs';

import { Footer } from './footer';

const meta: Meta<typeof Footer> = {
  title: 'Sections/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#121212',
        },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    logo: {
      src: 'http://localhost:3845/assets/bc823674123ceca9699008e23bdefde71ac5b1b6.png',
      alt: 'WB Cars Auto Detailing Logo',
    },
    showcaseImage: {
      src: 'http://localhost:3845/assets/89ca914e1cb1c12985b42a8d712f08000343c39c.png',
      alt: 'Blue BMW M4 car showcase',
    },
    contact: {
      phone: '+48 577 211 777',
      address: 'Tarnów, ul. Gliniańska 12b',
      email: 'wbcarss@gmail.com',
    },
    socialLinks: [
      {
        platform: 'Facebook' as const,
        url: 'https://facebook.com/wbcars',
      },
      {
        platform: 'Instagram' as const,
        url: 'https://instagram.com/wbcars',
      },
    ],
  },
};

export const WithCustomContent: Story = {
  args: {
    logo: {
      src: 'http://localhost:3845/assets/bc823674123ceca9699008e23bdefde71ac5b1b6.png',
      alt: 'Custom Auto Detailing Logo',
    },
    showcaseImage: {
      src: 'http://localhost:3845/assets/89ca914e1cb1c12985b42a8d712f08000343c39c.png',
      alt: 'Custom car showcase',
    },
    contact: {
      phone: '+1 234 567 890',
      address: 'New York, NY 10001',
      email: 'contact@example.com',
    },
    socialLinks: [
      {
        platform: 'Facebook' as const,
        url: 'https://facebook.com/example',
      },
      {
        platform: 'Instagram' as const,
        url: 'https://instagram.com/example',
      },
    ],
  },
};

export const SingleSocialLink: Story = {
  args: {
    ...Default.args,
    socialLinks: [
      {
        platform: 'Instagram' as const,
        url: 'https://instagram.com/wbcars',
      },
    ],
  },
};