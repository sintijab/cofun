import type { Meta, StoryObj } from '@storybook/react';
import { ProjectList as ProjectListBase } from '@co-fun/ui';
import { cardMocks } from './cardMocks';
import { projectMocks } from './projectMocks';

const meta: Meta = {
    component: ProjectListBase,
  };
  export default meta;

type SectionStory = StoryObj<typeof ProjectListBase>;

export const ProjectList: SectionStory = {
    args: {
      projects: projectMocks
    }
  }
  