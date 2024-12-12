import { Carousel, Flex, InitiativeOverview, Link, Project, TextBase } from "@co-fun/ui";
import { getTrends, selectTrends } from "../slices/getTrends";
import _ from 'lodash';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "../store";
import { generateColorPalettes } from '../components/utils/p5_utils';
import dynamic from "next/dynamic";
const Sketch = dynamic(() => import('@co-fun/ui').then((data) => data.Sketch), {ssr: false});


export default function Index() {
  const trendsList = useSelector(selectTrends);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!trendsList.length) {
      dispatch(getTrends('technical'))
    }
    console.log(trendsList)
  }, [])
  const list = trendsList.map((sound, i) =>
    <Flex key={i} justifyContent="center" alignItems="center" position="relative"><Link href={sound?.source || '/trends'} isExternal={true} variant="card" position="absolute" p=".5rem" textAlign="center">{`${sound.author?.toUpperCase()} - ${sound.title?.toUpperCase()}`}</Link>{typeof window !== undefined && <Sketch reset={false} w={300} h={300} customColors={generateColorPalettes} />}</Flex>
  );
  const chunkedItems = _.chunk(list, 3);
  const args = {
    title: 'What are you listening now?',
    author: 'Sintija Birgele',
    description: '“Listening helps us communicate and deepen our understanding and appreciation of environment around us. Learning about the sound artists and their work in different contexts helps listeners recognize how location influences sound, and most importantly acknowledge - what brings us joy.”',
    isFollowing: true,
  };
  return (
    <>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
        Active Project Phase
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">At CO-FUN we are interested in working with business owners and individuals that handle projects with overreaching costs or time managament.</TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">At CO-FUN we develop integrations of intelligent systems and automation that can resolve inefficient resource managament. We're supporting business owners and organizations with their growth and alignment to their vision by maximizing the potential with set of technology to achieve their main objectives.</TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">We're aiming for software development with set of AI tools for optimizing the cost and time managament and believe that any organization can benefit from cross-collaboration with us.</TextBase>
      <TextBase textStyle="project-title" lineHeight="2">
        Project planning
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight="2">
        Classifying the projects according to the portfolio matrix including costs and time.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        If you're dealing with multiple accept only those where there is anything to learn from them and they correspond to your overriding vision. At CO-FUN we encourage to select projects with potential of automating manual work processes and finding the right set of tools with help of our platform.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        Engage into only in those initiatives which moves towards achieving your objectives and shares your vision.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        At CO-FUN we are sharing the knowledge and building the software with aim to increase its usability and promote the services available for businesses in project planning and execution. See our active projects:
      </TextBase>
      <Flex mb="3.5rem" flexWrap="wrap" width="100%">
        <TextBase textStyle="project-title" lineHeight="2">
          Latest Projects
        </TextBase>
        <InitiativeOverview {...args} border="1px solid #CCCCCC" borderRadius=".5rem" mt="1rem" isFollowing={null} p={["4rem .5rem", "4rem 2rem"]}>
          <Project title="AI Radio Moderation" description="Based on your listening experience AI algorithm will analyze your stats and give you suggestions from similar playlists on a daily basis. Variety of selection is based on how many active listeners are contributing to this project." isEndorsed={false} width="100%" formId="https://co-fun.us9.list-manage.com/subscribe/post?u=afdf41c218cb20406a176006b&amp;id=5656180439&amp;f_id=00a056e1f0">
            <TextBase textStyle="project-title" flexBasis="100%" mb="1rem">Rooftop Radio</TextBase>
            <Carousel cards={chunkedItems} h="300px" />
          </Project>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/clddPytzfwM?si=ECm6GcxfrNYJ7PFc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </InitiativeOverview>
      </Flex>
    </>
  );
}