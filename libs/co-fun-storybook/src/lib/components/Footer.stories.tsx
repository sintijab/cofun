import type { Meta, StoryObj } from '@storybook/react';
import { Footer as FooterBase } from '@co-fun/ui';

const meta: Meta = {
  component: FooterBase,
};
export default meta;
type Story = StoryObj<typeof FooterBase>;

export const Footer: Story = {
  args: {
    columns: [
      {
        title: 'Use cases',
        links: [
          {
            label: 'AI assistance',
            href: '#ai_assistance'
          },
          {
            label: 'Content optimization',
            href: '#content_optimization'
          },
          {
            label: 'Content generation',
            href: '#content_generation'
          },
          {
            label: 'Initiatives',
            href: '#initiatives'
          },
          {
            label: 'Action analysis',
            href: '#action_analysis'
          },
          {
            label: 'Projects',
            href: '#projects'
          },
          {
            label: 'Team collaboration',
            href: '#team_collaboration'
          }
        ]
      },
      {
        title: 'Explore',
        links: [
          {
            label: 'Academy',
            href: '#academy'
          },
          {
            label: 'Integrations',
            href: '#integrations'
          },
          {
            label: 'Funding',
            href: '#funding'
          },
          {
            label: 'Development features',
            href: '#development_features'
          },
          {
            label: 'Form creation',
            href: '#form_creation'
          },
          {
            label: 'Collaboration features',
            href: '#projects'
          },
          {
            label: 'Design process',
            href: '#design_process'
          }
        ]
      },
      {
        title: 'Resources',
        links: [
          {
            label: 'Analytics',
            href: '#analytics'
          },
          {
            label: 'Community',
            href: '#community'
          },
          {
            label: 'Events',
            href: '#events'
          },
          {
            label: 'Blog',
            href: '#blog'
          },
          {
            label: 'Support',
            href: '#support'
          },
          {
            label: 'Developers',
            href: '#developers'
          },
          {
            label: 'Reource library',
            href: '#resource_library'
          }
        ]
      }
    ],
  }
}
