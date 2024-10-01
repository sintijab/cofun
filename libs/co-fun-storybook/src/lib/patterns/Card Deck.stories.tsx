import type { Meta, StoryObj } from '@storybook/react';
import { Box, CardDeck as CardSectionBase } from '@co-fun/ui';

const meta: Meta = {
  component: CardSectionBase,
};
export default meta;
type CardStory = StoryObj<typeof CardSectionBase>;

export const CardDeck: CardStory = {
  args: {
    flex: ' 0 0 33%',
    cards: [
      {
        category: 'We value your privacy',
        title: 'privacy-first tracking',
        description: 'We are transparent about our data policy with full disclosure to our clients. We collect the data that is crucial for business decisions, analysis and constant improvements of our platform, and do not send it to the third party services to respect client’s privacy.'
      },
      {
        category: 'We want you to succeed',
        title: 'evaluating your needs',
        description: 'We are doing everything for the consistent, seamless user experience and information access and continuously improve AI assistant, algorithms and automation processes on our services for learning and fulfilling your business needs.'
      },
      {
        category: 'We value your time',
        title: 'you set your own value',
        description: 'We envision creators fairly compensated for their work. We believe in the authentic and desirable goals that does not promote obtaining consumer goods, but foster a positive influence from actionable items in their career or business.'
      },
      {
        category: 'Back to the community',
        title: 'collaborative mindset',
        description: 'We are highly interested in building and equipping creators with the tools for building the trust, active engagement and interest from their network, manage that relationship and deliver value on both ends.'
      },
      {
        category: 'Commitment',
        title: 'we value our own integrity',
        description: 'We thrive on wholehearted efforts and the spirit of community of practice in succeed through collaboration, market research and 37% rule – no halfway, no hesitation. We bring attention to the success in career pathways.'
      },
      {
        category: 'Not settling for less',
        title: 'data-informed decisions & actionable insights',
        description: 'We are constantly reaching out to the professionals, organizations, managers and business owners about how we can make informed decisions to bring their career and business to the next level.'
      },
    ]
  },
  render: (args) => <Box margin="0 10rem"><CardSectionBase {...args}/></Box>
}