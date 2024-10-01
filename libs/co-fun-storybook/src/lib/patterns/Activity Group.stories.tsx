import type { Meta, StoryObj } from '@storybook/react';
import { ActivityGroup as ActivityBase, Box } from '@co-fun/ui';
import { activityMocks } from './activityMocks';

const meta: Meta = {
  component: ActivityBase,
};
export default meta;
type Story = StoryObj<typeof ActivityBase>;

export const ActivityGroup: Story = {
  args: {
    title: 'Latest Actions',
    activity: activityMocks
  },
  render: (args) => <Box><ActivityBase {...args} /></Box>
}