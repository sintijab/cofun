import type { Meta, StoryObj } from '@storybook/react';
import { Box, icons as iconList, TextBase } from '@co-fun/ui';

const Icons = () => {
  return <Box display="flex" flexWrap="wrap" width="100%">{iconList.map((Icon) => <Box p="1rem" flex="0 0 30%"><TextBase mb=".5rem">{Icon.name}</TextBase><Icon {...{ height:"21px", width: "21px" }} /><Icon {...{ height:"33px", width: "33px" }} /><Icon {...{ height:"40px", width: "40px" }} /></Box>)}</Box>
}
const meta: Meta = {
  component: Icons,
};
export default meta;
type Story = StoryObj<typeof Icons>;

export const Outline: Story = {
  args: {}
}
