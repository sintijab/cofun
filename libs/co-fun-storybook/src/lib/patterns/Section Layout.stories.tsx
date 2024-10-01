import type { Meta, StoryObj } from '@storybook/react';
import { CardDeck as CardSectionBase, SectionLayout as SectionLayoutBase } from '@co-fun/ui';
import { cardMocks } from './cardMocks';

const meta: Meta = {
    component: SectionLayoutBase,
  };
  export default meta;

type SectionStory = StoryObj<typeof SectionLayoutBase>;

export const SectionLayout: SectionStory = {
    args: {
      children: <CardSectionBase cards={cardMocks} flex=' 0 0 31.5%' />,
      image: './section_layout.avif',
      blockquote: 'We are committed to being an anti-racist organization, dedicated to eliminating racism in our workplace, on our platform, within our community, and in a broader world.',
      title: 'We Stick to Our Commitments',
      description: 'The entire community is stronger when everyone can experience the joy of finding their talent and the fellowship of inclusion in the group. We have determined undertaking the following commitments that align with our core values'
    }
  }
  