import { ActivityGroup, Box, Carousel, CertificateIcon, DiagramIcon, Flex, Heading, Hero, InitiativeOverview, InputBase, Link, MonitorIcon, NetworkIcon, PricingTable, Project, StarsIcon, TextBase } from "@co-fun/ui";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getTrends, selectTrends } from "../slices/getTrends";
import { useEffect } from "react";
import { AppDispatch } from "../store";
import { generateColorPalettes } from '../components/utils/p5_utils';
import _ from 'lodash';
import useScrollToHash from "../components/utils/scroll";
import dynamic from "next/dynamic";
const Sketch = dynamic(() => import('@co-fun/ui').then((data) => data.Sketch), {ssr: false});

export default function Index() {

  const {
    register,
  } = useForm()
  const trendsList = useSelector(selectTrends);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!trendsList.length) {
      dispatch(getTrends('technical'))
    }
  }, [])

  useScrollToHash()

  const list = trendsList.map((sound, i) =>
    <Flex key={i} justifyContent="center" alignItems="center" position="relative"><Link href={sound?.source || '/trends'} isExternal={true} variant="card" position="absolute" p=".5rem" textAlign="center">{`${sound.author?.toUpperCase()} - ${sound.title?.toUpperCase()}`}</Link>{typeof window !== undefined && <Sketch reset={false} w={300} h={300} customColors={generateColorPalettes} />}</Flex>
  );
  const chunkedItems = _.chunk(list, 3);
  const args = {
    title: 'AI Assistants in Sound Moderation',
    author: 'Sintija Birgele',
    description: '“Listening helps us communicate and deepen our understanding and appreciation of environment around us. Learning about the sound artists and their work in different contexts helps listeners recognize how location influences sound, and most importantly acknowledge - what brings us joy.”',
    isFollowing: true,
  };
  return (
    <>
      <Hero {
        ...{
          heading: <><TextBase color="primary.green" textStyle="hero-h1">plan your business</TextBase><TextBase color="primary.default" textStyle="hero-h2" pl=".8rem">with</TextBase><br /><TextBase color="primary.default" textStyle="hero-h1">AI and automation</TextBase></>,
          subheading: <><TextBase color="primary.default" textStyle="hero-h2" ml="1rem">funding and growth</TextBase><br /><TextBase color="primary.white" textStyle="hero-h1">in co-creation</TextBase></>,
          link: {
            label: 'Get started',
            href: '/explore'
          },
          image: '/treetop_walk rugen.avif'
        }
      } />
      <Flex alignItems="center" justifyContent="space-around" p=".3rem" mb="1.5rem" borderBottom="1px solid #e0e0e0" display={["none", "flex"]}>
        <MonitorIcon />
        <Heading fontFamily="gingerBold" as="p" size="s" w="auto" margin="0" color="primary.default">Learn from industry experts</Heading>
        <DiagramIcon />
        <Heading fontFamily="gingerBold" as="p" size="s" w="auto" margin="0" color="primary.default">Grow your portfolio</Heading>
        <NetworkIcon />
        <Heading fontFamily="gingerBold" as="p" size="s" w="auto" margin="0" color="primary.default">Discover market needs</Heading>
        <StarsIcon />
        <Heading fontFamily="gingerBold" as="p" size="s" w="auto" margin="0" color="primary.default">Lead by example</Heading>
        <CertificateIcon />
        <Heading fontFamily="gingerBold" as="p" size="s" w="auto" margin="0" color="primary.default">Become trusted</Heading>
      </Flex>
      <Box>
        <Flex alignItems="center" justifyContent="center" flexDirection="column" display={["none", "flex"]}>
          <Heading fontFamily="gingerBold" as="h2" size="md" w="auto" margin="0" color="primary.default">Work with us by letting</Heading>
          <Heading fontFamily="gingerBold" as="h2" w="auto" m="0" size="lg" pl={["0", "15rem"]} color="primary.green" textDecoration="underline">AI work for YOU</Heading>
        </Flex>
        <Flex justifyContent="center" p=".5rem" display={["flex", "none"]}>
        <TextBase textStyle="activity-title">
          Learn more from our <u><a href="./academy">AI Academy</a></u>
        </TextBase>
      </Flex>
        <ActivityGroup justifyContent="space-around" border="none" hasFilter={false} activity={[
          {
            image: './situational_leadership.jpg',
            title: 'situational leadership',
            description: '“Learn how AI can encourage self-evaluation in the team to learn about your strengths and capabilities towards more successful collaboration and outperforming teamwork.”',
            href: "https://youtu.be/mJGgYGx6Qcg"
          },
          {
            image: './second_order.jpg',
            title: 'second-order observation',
            description: '“Developing second-order observation skills breaks the existing behavioral patterns and is a strong psychological technique known to succesful leaders and advanced freedivers.”',
            href: "https://youtu.be/DxDsYawE6Vo"
          },
          {
            image: './intro.png',
            title: 'Appreciative Inquiry',
            description: '“Most people think that they know what they are good at but what if they are wrong? Learn how to advance your communication skills with AI to approach feedback with authenticity and prompt taking more impactful decisions.”',
            href: "https://youtu.be/P9jfHhUlLCE"
          },
        ]} />
      </Box>
      <Flex justifyContent="center" p=".5rem" m="0 0 3rem" display={["none", "flex"]}>
        <TextBase textStyle="activity-title">
          Learn more from our <u><a href="./academy">AI Academy</a></u>
        </TextBase>
      </Flex>
      <Flex justifyContent="center" p={["1rem 0", "unset"]} id="pricing">
        <a href="./funding">
          <Heading fontFamily="gingerBold" as="h2" size="lg" w="auto" margin="0" color="primary.default">
            Get Started for <u>FREE</u>
          </Heading>
          <TextBase textStyle="activity-title" color="#7e00ff">
            & hire us for your new AI Assistant
          </TextBase>
        </a>
      </Flex>
      <Flex justifyContent="center">
        <PricingTable />
      </Flex>
      <div id="signup" />
      <Flex direction="column" alignItems="center">
        <TextBase textStyle="activity-title" color="#7e00ff" pt={["1rem", ".5rem"]} pb="1rem" textAlign="center">
          We are going to launch our services on February 1st, 2025.
        </TextBase>
        <Heading fontFamily="gingerBold" as="h2" size="lg" w="auto" margin="0" color="primary.default" fontSize="2.3em">
          Sign up to be the first!
        </Heading>
        <div id="mc_embed_shell">
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
          <div id="mc_embed_signup">
            <form action="https://co-fun.us9.list-manage.com/subscribe/post?u=afdf41c218cb20406a176006b&amp;id=5656180439&amp;v_id=3&amp;f_id=00b856e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
              <div id="mc_embed_signup_scroll">
                <div className="mc-field-group">
                  <InputBase {...register("EMAIL")} placeholder="Email address" variant="unstyled" required={true} id="mce-EMAIL" padding=".5rem!important" border="1px" borderColor="chat.authorBg!important" size="lg" focusBorderColor='chat.authorBg!important' borderRadius="2rem!important" _placeholder={{ color: 'chat.authorBg!important', fontFamily: '"Jost", sans-serif;!important' }} _focus={{ border: '2px!important', borderColor: 'navigation.dark!important' }} /></div>
                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                  /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                  <input type="text" tabIndex={-1} {...register("b_afdf41c218cb20406a176006b_5656180439")} />
                </div>
                <div className="optionalParent">
                  <div hidden={true}><input type="hidden" name="tags" value="11843562" /></div>
                  <div className="clear foot">
                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Sign up" />
                    <p style={{ margin: '0px auto' }}><a href="http://eepurl.com/i53tms" title="Mailchimp - email marketing made easy and fun"><span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}><img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }} /></span></a></p>
                  </div>
                </div>
              </div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
            </form>
          </div>
        </div>
        <Flex mb="3.5rem" flexWrap="wrap" width={["100%", "60%"]}>
          <TextBase textStyle="project-title" lineHeight="2">
            Latest Projects
          </TextBase>
          <InitiativeOverview {...args} border="1px solid #CCCCCC" borderRadius=".5rem" mt="1rem" isFollowing={null} p={["4rem .5rem", "4rem 2rem"]}>
            <Project title="AI Radio Moderation" description="Based on your listening experience AI algorithm will analyze your stats and give you suggestions from similar playlists on a daily basis. Variety of selection is based on how many active listeners are contributing to this project." isEndorsed={false} width="100%" formId="https://co-fun.us9.list-manage.com/subscribe/post?u=afdf41c218cb20406a176006b&amp;id=5656180439&amp;f_id=00a056e1f0">
              <TextBase textStyle="project-title" flexBasis="100%" mb="1rem">Rooftop Radio</TextBase>
              <Carousel cards={chunkedItems} h="300px" />
            </Project>
          </InitiativeOverview>
        </Flex>
      </Flex>
    </>
  );
}