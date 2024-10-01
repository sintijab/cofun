import type { Meta, StoryObj } from '@storybook/react';
import { AIAssistantChat, Project as ProjectBase } from '@co-fun/ui';
import { conversationsMock } from '../components/conversationsMock';
import { messageMock } from '../components/messageMock';
import { navigationSideLinks } from '../components/navigationSideLinks';
import { suggestionsMocks } from '../components/suggestionsMocks';

const meta: Meta = {
  component: ProjectBase,
};
export default meta;
type Story = StoryObj<typeof AIAssistantChat>;

export const AIAssistant: Story = {
  args: { ...conversationsMock, ...messageMock, ...navigationSideLinks, ...suggestionsMocks },
  render: (args) => <AIAssistantChat {...args} />
}
