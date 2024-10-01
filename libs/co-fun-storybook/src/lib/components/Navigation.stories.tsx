import type { Meta, StoryObj } from '@storybook/react';
import { NavigationTop as NavigationTopBase, NavigationChat as NavigationChatBase, NavigationSide as NavigationSideBase } from '@co-fun/ui';
import { navigationSideLinks } from './navigationSideLinks';
const meta: Meta = {
  component: NavigationTopBase,
};
export default meta;
type Story = StoryObj<typeof NavigationTopBase>;

export const NavigationTop: Story = {
  args: {
    links: [
      {
        label: 'Creators',
        href: '#creators'
      },
      {
        label: 'Startups',
        href: '#startups'
      },
      {
        label: 'Features',
        href: '#features'
      },
      {
        label: 'Pricing',
        href: '#pricing'
      },
      {
        label: 'Contact',
        href: '#contact'
      }
    ],
  }
}

type NavigationSideBaseStory = StoryObj<typeof NavigationSideBase>;

export const NavigationSide: NavigationSideBaseStory = {
  args: navigationSideLinks,
  render: (args: any) => {
    return <NavigationSideBase {...args} />
  }
}

type NavigationChatBaseStory = StoryObj<typeof NavigationChatBase>;


export const NavigationChat: NavigationChatBaseStory = {
  args: {
    author: 'Sintija',
    image: '',
    title: 'Medicine Through Lens of Evolution'
  },
  render: (args: any) => {
    return <NavigationChatBase {...args} />
  }
}