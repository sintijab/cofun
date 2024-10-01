import type { Meta, StoryObj } from '@storybook/react';
import { Rating as RatingBase } from '@co-fun/ui';

const meta: Meta = {
  component: RatingBase,
};
export default meta;
type Story = StoryObj<typeof RatingBase>;

export const Rating: Story = {
  args: {}
}
