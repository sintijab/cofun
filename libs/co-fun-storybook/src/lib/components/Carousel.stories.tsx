import type { Meta, StoryObj } from '@storybook/react';
import { Carousel as CarouselBase, Flex, Link, Sketch } from '@co-fun/ui';
import _ from 'lodash';

const meta: Meta = {
  component: CarouselBase,
};
export default meta;
type Story = StoryObj<typeof CarouselBase>;

export const CarouselBanner: Story = {
  args: {
    cards: [
      {
        title: 'Design Projects 1',
        text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
          'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      },
      {
        title: 'Design Projects 2',
        text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
          'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
      },
      {
        title: 'Design Projects 3',
        text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
          'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      },
    ]
    
  }
}
const trendsList = [
  {
      "id": "34e536e2-5a56-4f1d-af54-95fcfcad1b0b",
      "title": "stone in focus",
      "author": "aphex twin",
      "date": "11/5/2024, 9:47:15 PM",
      "source": "https://www.youtube.com/watch?v=q86g1aop6a8",
      "sound_source": "musical_instruments"
  },
  {
      "id": "4f1959c3-fc7e-4dc1-bd02-677ca78ec758",
      "title": "persona",
      "author": "rival consoles",
      "date": "11/5/2024, 9:43:09 PM",
      "source": "https://www.youtube.com/watch?feature=shared&v=niiUkcLpwXY",
      "sound_source": "synthetic_sources"
  },
  {
      "id": "b97d7de5-94ee-4def-83e9-08b9ae778163",
      "title": "del oro",
      "author": "floating points",
      "date": "11/5/2024, 9:40:41 PM",
      "source": "https://www.youtube.com/watch?feature=shared&v=7iedUG5Kpis",
      "sound_source": "synthetic_sources"
  },
  {
      "id": "33a8110e-6308-47af-b455-9cbbe5ea2745",
      "title": "stranger things",
      "author": "bacao rhythm  steel band",
      "date": "11/5/2024, 9:35:57 PM",
      "source": "https://www.youtube.com/watch?feature=shared&v=wHPlI69KF9I",
      "sound_source": "musical_instruments"
  },
  {
      "id": "ec648664-61da-42c5-8a33-97af10321ff8",
      "title": "the lost girls",
      "author": "flying lotus",
      "date": "11/5/2024, 9:32:13 PM",
      "source": "https://www.youtube.com/watch?v=r7MEZYxcDik",
      "sound_source": "musical_instruments"
  },
  {
      "id": "f13db0f0-479e-4f81-bb05-297715143f38",
      "title": "dreamers wake",
      "author": "rival consoles",
      "date": "11/5/2024, 9:21:58 PM",
      "source": "https://www.youtube.com/watch?feature=shared&v=dVAQO6Fs2f0",
      "sound_source": "hybrid_sources"
  },
  {
      "id": "dd56ce2a-0000-4027-8aca-14344c9288f7",
      "title": "simon says",
      "author": "refilled",
      "date": "11/5/2024, 9:17:57 PM",
      "source": "https://www.youtube.com/watch?v=ychh3FpsXJk",
      "sound_source": "synthetic_sources"
  },
  {
      "id": "47397d93-bb57-48e2-a9da-3fc9a87114bf",
      "title": "essert romance",
      "author": "dada disco",
      "date": "11/5/2024, 9:16:02 PM",
      "source": "https://www.youtube.com/watch?v=Ug7V94GICoQ",
      "sound_source": "synthetic_sources"
  },
  {
      "id": "8dc7609f-af4c-4b22-95fc-789adb081d2c",
      "title": "move",
      "author": "adam port feat malachiii",
      "date": "11/5/2024, 9:11:52 PM",
      "source": "https://www.youtube.com/watch?v=95dB-ObZ7Ho",
      "sound_source": "synthetic_sources"
  },
  {
      "id": "4263c3b5-4c41-4a59-b8f2-b161bf5bd0f1",
      "title": "are you even real",
      "author": "james blake",
      "date": "11/5/2024, 8:49:45 PM",
      "source": "https://www.youtube.com/watch?v=_AYrcgkqMUE",
      "sound_source": "musical_instruments"
  },
  {
      "id": "c0781c58-c4f7-4271-a829-81eccf055262",
      "title": "laminaria",
      "author": "geju",
      "date": "11/5/2024, 8:41:23 PM",
      "source": "https://www.youtube.com/watch?v=B7GMfcigQUU",
      "sound_source": "hybrid_sources"
  },
  {
      "id": "277d9682-e4ee-4e8f-b3c3-518f2dbff53e",
      "title": "orange hues",
      "author": "aqualina",
      "date": "11/4/2024, 11:37:28 PM",
      "source": "https://www.youtube.com/watch?v=14ij-aEbhdY",
      "sound_source": "musical_instruments"
  }
];

const trends = trendsList.map((sound, i) =>
  <Flex key={i} justifyContent="center" alignItems="center" position="relative"><Link href={sound?.source || '/trends'} isExternal={true} variant="card" position="absolute" p=".5rem" textAlign="center">{`${sound.author?.toUpperCase()} - ${sound.title?.toUpperCase()}`}</Link><Sketch reset={false} w={300} h={300} /></Flex>
)

const chunkedItems = _.chunk(trends, 3);


export const CarouselCards: Story = {
  args: {
    cards: chunkedItems,
    settings: {
      autoplaySpeed: 3000
    }
  }
}