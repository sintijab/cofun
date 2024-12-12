import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Heading as HeadingBase, Poster as PosterBase } from '@co-fun/ui';

const meta: Meta = {
  component: HeadingBase,
};
export default meta;
type Story = StoryObj<typeof HeadingBase>;

export const Heading: Story = {
  args: {
    variant: 'headline',
    children: 'Discover',
    textAlign: 'center'
  },
  render: (args: any) => <Flex background="primary.default" w="100%"><HeadingBase {...args} /></Flex>
}

export const Poster: Story = {
  args: {
    variant: 'headline',
    headline: 'Discover',
    textAlign: 'center',
    description: 'The Ultimate AI Adventure',
    button: 'Book Request'
  },
  render: (args: any) => <PosterBase {...args} />
}

