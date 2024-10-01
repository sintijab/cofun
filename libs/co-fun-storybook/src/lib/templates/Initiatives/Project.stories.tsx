import type { Meta, StoryObj } from '@storybook/react';
import { ActivityGroup, Project as ProjectBase } from '@co-fun/ui';
import { activityMocks } from '../../patterns/activityMocks';
import { projectMocks } from './projectMocks';

const meta: Meta = {
  component: ProjectBase,
};
export default meta;
type Story = StoryObj<typeof ProjectBase>;

export const Project: Story = {
  args: { ...projectMocks, isEndorsed: true },
  render: (args) => <ProjectBase {...args}><ActivityGroup title={'Latest in Projects'} activity={activityMocks} border="none" p="0"/></ProjectBase>
}
