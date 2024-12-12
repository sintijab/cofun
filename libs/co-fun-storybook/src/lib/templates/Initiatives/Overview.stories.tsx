import type { Meta, StoryObj } from '@storybook/react';
import { ActivityGroup, InitiativeOverview, Project } from '@co-fun/ui';
import { activityMocks } from '../../patterns/activityMocks';
import { projectMocks } from './projectMocks';

const meta: Meta = {
  component: InitiativeOverview,
};
export default meta;
type Story = StoryObj<typeof InitiativeOverview>;

export const Overview: Story = {
  args: {
    title: 'Literacy and Innovation Month',
    author: 'Sintija Birgele',
    description: '“Our community is driven by a shared purpose: to make a better world through education, research, and innovation. This project has been created as part of September - National Literacy Month, a time to reflect on the importance and impact of literacy in our day-to-day lives. All the endorsements from this fundraising will be donated to the United Nations Relief and Works Agency.”',
    isFollowing: true,
    profile: './profile.jpg'
  },
  render: (args) => <InitiativeOverview {...args}><Project {...projectMocks}><ActivityGroup title={'Latest News'} activity={activityMocks} border="none" p="0"/></Project></InitiativeOverview>
}
