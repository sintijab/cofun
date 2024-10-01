import type { Meta, StoryObj } from '@storybook/react';
import { Activity as ActivityBase, Box } from '@co-fun/ui';

const meta: Meta = {
  component: ActivityBase,
};
export default meta;
type Story = StoryObj<typeof ActivityBase>;

export const Activity: Story = {
  args: {
    image: './activity_1.jpg',
    title: 'expoit/explore tradeoffs',
    author: 'Syntia',
    description: '"Childhood gives you a period in which you can just explore possibilities, and later in life in the face of uncertainty we should be able to boost our options we know less about by trading knowledge."',
    supportersCount: '3,324',
    endorsementCount: '2,401'
  },
  render: (args) => <Box width="21.6rem" height="29.25rem"><ActivityBase {...args} /></Box>
}