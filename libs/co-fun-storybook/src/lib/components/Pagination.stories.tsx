import type { Meta, StoryObj } from '@storybook/react';
import { Pagination as PaginationBase } from '@co-fun/ui';

const meta: Meta = {
  component: PaginationBase,
};
export default meta;
type Story = StoryObj<typeof PaginationBase>;

export const Pagination: Story = {
  args: {}
}
