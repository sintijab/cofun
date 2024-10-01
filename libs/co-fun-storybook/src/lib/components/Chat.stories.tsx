import type { Meta, StoryObj } from '@storybook/react';
import { ConversationsList as ConversationsListBase, Messages as MessagesBase, Input as InputBase } from '@co-fun/ui';
import { messageMock } from './messageMock';
import { suggestionsMocks } from './suggestionsMocks';
import { conversationsMock } from './conversationsMock';

const meta: Meta = {
  component: ConversationsListBase,
};
export default meta;
type Story = StoryObj<typeof ConversationsListBase>;

export const Conversations: Story = {
  args: conversationsMock
}
type HeroMinimalBaseStory = StoryObj<typeof MessagesBase>;

export const Messages: HeroMinimalBaseStory = {
  args: messageMock,
  render: (args) => <MessagesBase {...args} />
}

type InputBaseStory = StoryObj<typeof InputBase>;

export const Input: InputBaseStory = {
  args: suggestionsMocks,
  render: (args) => <InputBase {...args} />
}
