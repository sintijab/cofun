import type { Meta, StoryObj } from '@storybook/react';
import { Hero as HeroBase, TextBase, HeroMinimal as HeroMinimalBase, HeroPersonal as HeroPersonalBase } from '@co-fun/ui';

const meta: Meta = {
  component: HeroBase,
};
export default meta;
type Story = StoryObj<typeof HeroBase>;

export const Hero: Story = {
  args: {
    heading: <><TextBase color="primary.green" textStyle="hero-h1">plan your business</TextBase><TextBase color="primary.default" textStyle="hero-h2" pl=".8rem">with</TextBase><br /><TextBase color="primary.default" textStyle="hero-h1">AI and automation</TextBase></>,
    subheading: <><TextBase color="primary.default" textStyle="hero-h2" ml="1rem">funding and growth</TextBase><br /><TextBase color="primary.white" textStyle="hero-h1">in co-creation</TextBase></>,
    link: {
      label: 'Get started',
      href: '#getstarted'
    },
    image: '/treetop_walk rugen.avif'
  }
}

type HeroMinimalBaseStory = StoryObj<typeof HeroMinimalBase>;

export const HeroMinimal: HeroMinimalBaseStory = {
  args: {},
  render: (args: any) => {
    return <HeroMinimalBase
      heading={<TextBase color="primary.white" textStyle="hero-h1" mb="1.5rem">Content Moderation Model</TextBase>}
      subheading={<><TextBase color="secondary.green" textStyle="hero-h2" fontSize="27pt"> Policy development & refinement with AI</TextBase><TextBase color="primary.white" textStyle="hero-h2" fontSize="27pt">replacing manual moderation by human</TextBase></>}
      image="./hero_basic.png"
      {...args}
    />
  }
}

type HeroPersonalBaseStory = StoryObj<typeof HeroPersonalBase>;

export const HeroPersonal: HeroPersonalBaseStory = {
  args: {
    title: 'Literacy and Innovation Month',
    summary: 'Initiatives that makes an impact through education, research, and innovation',
    author: 'Sintija Birgele',
    profile: './profile.jpg',
    image: './initiative_cover.png',
    hasNotifications: true
  },
  render: (args: any) => {
    return <HeroPersonalBase {...args} />
  }
}