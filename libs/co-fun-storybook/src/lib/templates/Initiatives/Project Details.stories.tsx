import type { Meta, StoryObj } from '@storybook/react';
import { ProjectDetails as ProjectDetailsBase } from '@co-fun/ui';
import { projectMocks } from '../../patterns/projectMocks';


const meta: Meta = {
  component: ProjectDetailsBase,
};
export default meta;
type Story = StoryObj<typeof ProjectDetailsBase>;

export const ProjectDetails: Story = {
  args: {
    hero: {
      title: 'Literacy and Innovation Month',
      summary: 'Initiatives that makes an impact through education, research, and innovation',
      author: 'Sintija Birgele',
      profile: './profile.jpg',
      image: './initiative_cover.png',
      hasNotifications: true
    },
    projects: projectMocks
  },
  render: (args: any) => {
    return <ProjectDetailsBase {...args} />
  }
}