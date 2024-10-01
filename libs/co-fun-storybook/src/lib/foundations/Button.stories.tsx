import type { Meta, StoryObj } from '@storybook/react';
import { Box, ButtonPrimary as Button, UserAddIcon } from '@co-fun/ui';

const meta: Meta = {
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Get started',
    size: 'sm'
  }
}

export const Outline: Story = {
  args: {
    children: 'Get started',
    size: 'sm',
    variant: 'outline'
  }
}

export const Transparent: Story = {
  args: {
    children: 'Get started',
    size: 'sm',
    variant: 'transparent'
  },
  render: (args) => <Box bg="primary.green" maxWidth="fit-content" p="1rem"><Button {...args} /></Box>
}

export const Icon: Story = {
  args: {
    children: (<><UserAddIcon w="1.5rem" h="1.5rem" mr=".5rem" fill="primary.green"/>{'Subscribe'}</>),
    size: 'sm',
    variant: 'outline'
  },
  render: (args) => <Button {...args} />
}


