import type { Meta, StoryObj } from '@storybook/react';
import { ModalBase, TextBase } from '@co-fun/ui';

const meta: Meta = {
  component: ModalBase,
};
export default meta;
type Story = StoryObj<typeof ModalBase>;

export const Modal: Story = {
  args: {
    title: 'Rhythmic Scale and Patterns',
    content: <TextBase>{'Rhythmic features capture the pulse, timing, and structure of a piece. They help define how sound flows, interacts, and drives forward motion.'}</ TextBase>,
    buttonText: 'Open Modal'
  }
}
