import { Box, Activity, Rating } from '@co-fun/ui';

const activityMocks = {
  image: './activity_1.jpg',
  title: 'expoit/explore tradeoffs',
  author: 'Syntia',
  description: '"Childhood gives you a period in which you can just explore possibilities, and later in life in the face of uncertainty we should be able to boost our options we know less about by trading knowledge."',
  supportersCount: '3,324',
  endorsementCount: '2,401'
};

export const messageMock = {
  author: 'Sintija',
  image: './profile.jpg',
  title: 'Inspiring Learning Through Play and Exploration',
  history: [
    {
      widget: <Box width="21.6rem"><Activity {...activityMocks} bg="primary.white"/></Box>,
      response: ''
    },
    {
      response: 'Please rate your overall impression about the quality of content',
      widget: <Rating />
    },
    {
      response: 'Thank you for the highest rating! Do you have any comments on that?',
    },
    {
      author: 'Sara',
      response: 'It was an insightful interview, I would like to support this author in the future',
    },
    {
      response: 'Thank you for the feedback!',
    },
    {
      response: 'Would you answer few more questions related to the content quality?',
    },
  ]
}