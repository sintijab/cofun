import { Carousel, Flex, InitiativeOverview, Link, ModalBase, Project, TextBase } from "@co-fun/ui";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { getTrends, selectTrends } from "../slices/getTrends";
import _ from 'lodash';
import { SoundSourceContext } from "../components/charts/SoundSourceContext";
import { TempoRhythmicScale } from "../components/charts/TempoRhythmicScale";
import { BeatTypesTempo } from "../components/charts/BeatTypesTempo";
import { TempoRangeModulation } from "../components/charts/TempoRangeModulation";
import { SoundSourceEnclosed } from "../components/charts/SoundSourceEnclosed";
import { SoundSourceOpenAir } from "../components/charts/SoundSourceOpenAir";
import { SoundSourceNatural } from "../components/charts/SoundSourceNatural";
import { RhythmicScaleContext } from "../components/charts/RhythmicScaleContext";
import { TempoComplexityContext } from "../components/charts/TempoComplexityContext";
import { generateColorPalettes } from '../components/utils/p5_utils';
import dynamic from "next/dynamic";
const Sketch = dynamic(() => import('@co-fun/ui').then((data) => data.Sketch), {ssr: false});


export default function Trends() {
  const trendsList = useSelector(selectTrends);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!trendsList.length) {
      dispatch(getTrends('technical'))
    }
  }, [])
  const list = trendsList.map((sound, i) =>
    <Flex key={i} justifyContent="center" alignItems="center" position="relative"><Link href={sound?.source || '/trends'} isExternal={true} variant="card" position="absolute" p=".5rem" textAlign="center">{`${sound.author?.toUpperCase()} - ${sound.title?.toUpperCase()}`}</Link>{typeof window !== undefined && <Sketch reset={false} w={300} h={300} customColors={generateColorPalettes} />}</Flex>
  );
  const chunkedItems = _.chunk(list, 3);
  const info = <Flex cursor="pointer" border="1px" h="1.2rem" w="1.2rem" ml=".5rem" borderRadius="1rem" justifyContent="center" alignContent="center" flexWrap="wrap" _hover={{ boxShadow: "inset 0 0 0 150px rgba(0, 0, 0, 0.05)" }}><TextBase textStyle="button-select-info">{`?`}</TextBase></Flex>
  const args = {
    title: 'What are you listening now?',
    author: 'Sintija Birgele',
    description: '“Listening helps us communicate and deepen our understanding and appreciation of environment around us. Learning about the sound artists and their work in different contexts helps listeners recognize how location influences sound, and most importantly acknowledge - what brings us joy.”',
    isFollowing: true,
  };
  return <>
    <Flex pt="3rem" h="100%" >
      <Flex pl="5.5rem" mb="3.5rem" flexWrap="wrap" width="100%">
        <InitiativeOverview {...args} border="1px solid #CCCCCC" borderRadius=".5rem" mt="1rem">
          <Project title="AI Radio Moderation" description="Based on your listening experience AI algorithm will analyze your stats and give you suggestions from similar playlists on a daily basis. Variety of selection is based on how many active listeners are contributing to this project." isEndorsed={false} width="100%" formId="https://co-fun.us9.list-manage.com/subscribe/post?u=afdf41c218cb20406a176006b&amp;id=5656180439&amp;f_id=00a056e1f0">
            <TextBase textStyle="project-title" flexBasis="100%" mb="1rem">Rooftop Radio</TextBase>
            <Carousel cards={chunkedItems} h="300px" />
            <Flex flexWrap="wrap" width="100%" justifyContent="space-between">
              <Flex flexBasis="100%" alignItems="center" mb="2rem" mt="1rem">
                <TextBase textStyle="project-title">Sound Analysis</TextBase>
                <ModalBase content={<Flex textStyle="button-select" mb="1rem" flexDirection="column">{<>
                  <TextBase textStyle="project-descr" flexBasis="100%" mb="1rem">Cluster Analysis: Group sounds based on origin and characteristics (e.g., natural vs. synthetic, enclosed vs. open spaces) by using sound sources, spatial context, and their subcategories.</TextBase>
                  <TextBase textStyle="project-descr" flexBasis="100%" mb="1rem">Pattern Recognition in Rhythm: Look at rhythm and tempo variables to identify common rhythmic and temporal patterns, which helps classify sound sources that share rhythmic qualities.</TextBase>
                  <TextBase textStyle="project-descr" flexBasis="100%" mb="1rem">Environmental Acoustics and Reverb Profiles: spatial context and its subsets to analyze environmental reverb and sound diffusion qualities, valuable for soundscapes and immersive audio experiences.</TextBase>
                </>}</Flex>} title={'Sound Analysis'} button={info} />
              </Flex>
              <Flex flexBasis="100%" alignItems="center" mb="2rem" mt="3rem" justifyContent="center">
                <TextBase textStyle="project-title">Sound Origin and Characteristics</TextBase>
                <ModalBase content={<Flex textStyle="button-select" mb="1rem" flexDirection="column">{<><TextBase textStyle="project-descr" flexBasis="100%" mb="1rem">Sound source in its spatial context and its subcategories provides a framework for understanding where and how the sounds are produced or perceived. Analyzing these together allows you to identify sound sources in specific spatial environments and link natural or artificial sources with their acoustic settings.</TextBase></>}</Flex>} title={'Sound Origin and Characteristics'} button={info} />
              </Flex>
              <SoundSourceContext data={trendsList} />
              <RhythmicScaleContext data={trendsList} />
              <TempoComplexityContext data={trendsList} />
              <Flex flexBasis="100%" alignItems="center" mb="2rem" mt="3rem" justifyContent="center">
                <TextBase textStyle="project-title">Rhythm and Temporal Features</TextBase>
                <ModalBase content={<Flex textStyle="button-select" mb="1rem" flexDirection="column">{<><TextBase textStyle="project-descr" flexBasis="100%" mb="1rem">These rhythm-related variables cover how sound flows over time and the nature of its rhythm, tempo, and pattern complexity. Beat types complements rhythmic scale and tempo modulation by adding specific rhythmic structure, which is essential when assessing how sounds might interact in dynamic patterns or temporal shifts. This group helps classify sounds based on rhythmic features and tempo behaviors, aiding in clustering sounds by their temporal characteristics.</TextBase></>}</Flex>} title={'Rhythm and Temporal Features'} button={info} />
              </Flex>
              <TempoRhythmicScale data={trendsList} />
              <BeatTypesTempo data={trendsList} />
              <TempoRangeModulation data={trendsList} />
              <Flex flexBasis="100%" alignItems="center" mb="2rem" mt="3rem" justifyContent="center">
                <TextBase textStyle="project-title">Environment and Acoustic Properties</TextBase>
                <ModalBase content={<Flex textStyle="button-select" mb="1rem" flexDirection="column">{<><TextBase textStyle="project-descr" flexBasis="100%" mb="1rem">Analyzing sound sources in spatial context allows you to evaluate the acoustic environments in which sounds are produced or recorded. This is important for categorizing sounds based on their spatial and environmental acoustics, which can influence how sounds propagate and blend in particular settings.</TextBase></>}</Flex>} title={'Environment and Acoustic Properties'} button={info} />
              </Flex>
              <SoundSourceEnclosed data={trendsList} />
              <SoundSourceOpenAir data={trendsList} />
              <SoundSourceNatural data={trendsList} />
            </Flex>
          </Project>
        </InitiativeOverview>
      </Flex>
    </Flex>
  </>
}