import type { Meta, StoryObj } from '@storybook/react';
import { Card as CardBase } from '@co-fun/ui';

const meta: Meta = {
  component: CardBase,
};
export default meta;
type Story = StoryObj<typeof CardBase>;

export const Card: Story = {
  args: {
    category: 'Back to the community',
    title: 'collaborative mindset',
    description: 'We are highly interested in building and equipping creators with the tools for building the trust, active engagement and interest from their network, manage that relationship and deliver value on both ends.'
  }
}
