import type { Meta, StoryObj } from '@storybook/react';
import { ButtonList as ButtonListBase } from '@co-fun/ui';

const meta: Meta = {
  component: ButtonListBase,
};
export default meta;
type Story = StoryObj<typeof ButtonListBase>;

export const ButtonList: Story = {
  args: {
    title: 'Rhythmic Scale and Patterns',
    description: 'Rhythmic features capture the pulse, timing, and structure of a piece. They help define how sound flows, interacts, and drives forward motion.',
    answers: [
        {
          answer: "Micro (subtle subdivisions of a beat, polyrhythms)",
          key: 'micro'
        },
        {
          answer: "Macro (overall rhythmic pattern, overarching structure)",
          key: 'macro'
        },
        {
          answer: "Recursive (repeating motifs, self-similar patterns)",
          key: 'recursive'
        },
        {
          answer: "Fluid (shifting, ambiguous timing signatures)",
          key: 'fluid'
        }
      ]
  }
}
