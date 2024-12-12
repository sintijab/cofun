import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@co-fun/ui';

const meta: Meta = {
  component: Link,
};
export default meta;
type Story = StoryObj<typeof Link>;

export const LinkBase: Story = {
  args: {
    children: 'Link',
    href: '#link',
    variant: 'nav'
  }
}
