import type { Meta, StoryObj } from '@storybook/react';
import { Logo as LogoBase } from '@co-fun/ui';

const meta: Meta = {
  component: LogoBase,
};
export default meta;
type Story = StoryObj<typeof LogoBase>;

export const Logo: Story = {
  args: {}
}
