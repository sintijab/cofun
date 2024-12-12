import { ActivityGroup, Box, Flex, Heading, TextBase } from "@co-fun/ui";

export default function Index() {
  return (
    <>
      <Flex direction="column" margin={["3rem 0", "1rem 4rem"]}>
        <Box>
          <Flex justifyContent="space-around">
            <Flex alignItems="center" justifyContent="center" flexDirection="column" margin={[".5rem", "unset"]}>
              <Heading fontFamily="gingerBold" as="h2" size="md" w="auto" margin="0" color="primary.default">Work with us by letting</Heading>
              <Heading fontFamily="gingerBold" as="h2" w="auto" m="0" size="lg" pl={["0", "15rem"]} color="primary.green" textDecoration="underline">AI work for YOU</Heading>
            </Flex>
          </Flex>
          <TextBase textStyle="heading" lineHeight="2" textAlign="center">
            AI Academy
          </TextBase>
          <ActivityGroup justifyContent="flex-start" flexWrap="wrap" border="none" hasFilter={false} activity={[
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
              image: './appreciative_inquiry.jpg',
              title: 'Appreciative Inquiry',
              description: '“Most people think that they know what they are good at but what if they are wrong? Learn how to advance your communication skills with AI to approach feedback with authenticity and prompt taking more impactful decisions.”',
              href: "https://youtu.be/P9jfHhUlLCE"
            },
            {
              image: './performance_analysis_1.jpg',
              title: 'evaluate performance with AI',
              description: '“How to establish automated feedback analysis with AI assistance in large or small organization?”',
              href: "https://youtu.be/44gUAM5yz0o"
            },
            {
              image: './performance_analysis.jpg',
              title: 'boost teamwork with AI',
              description: '“Learn about integrating AI in feedback collection to analyze results to boost teams motivation and performance.”',
              href: "https://youtu.be/BgCkt7uma3k"
            },
            {
              image: './work_process_1.jpg',
              title: 'AI in work process modelling',
              description: '“Develop team performance model by automating the feedback collection with AI integrations. How to collect teams feedback to support their performance?”',
              href: "https://youtu.be/Ndy5hXqDros"
            },
            {
              image: './work_process.jpg',
              title: 'AI in work process modelling',
              description: '“Develop team performance model by automating the feedback collection with AI integrations. How to evaluate teams feedback with AI and motivate them to sustain teams performance?”',
              href: "https://youtu.be/CL5DkrkEL4w"
            },
            {
              image: './it_goes_without_saying.jpg',
              title: 'it goes without saying',
              description: '“Director’s job can be compared to running a small business. Better planning allows for better science. Being focused and available, and agile to building things, taking it apart and putting it back together.”',
              href: "https://youtu.be/ydx7jPbMlRU"
            },
            {
              image: './ai_role_in_community_tourism.jpg',
              title: 'AI role in community-based tourism',
              description: '“We’re always laughing during rehearsals or technical meetings, you’re always surrounded by creative people. And you’re bouncing ideas off each other as you’re all bonded together by a common goal”',
              href: "https://youtu.be/0ja2Fityzq8"
            },
            {
              image: './business_relations.jpg',
              title: 'AI role in business relations',
              description: '“The power of processing large quantities of data makes Artificial Intelligence optimization more sophisticated. In comparison with a human judgement it makes predictions with real-world measurments and approximate results instantly.“',
              href: "https://youtu.be/T9M-SRWuXXI"
            },
            {
              image: './your_child_knows_more.jpg',
              title: 'your child knows more about AI than you',
              description: '“Childhood gives you a period in which you can just explore possibilities, and later in life in the face of uncertainty we should be able to boost our options we know less about by trading knowledge.“',
              href: "https://youtu.be/1_21bvhu8tU"
            },
            {
              image: './sustainable_tourism.jpg',
              title: 'AI role in sustainable tourism',
              description: '“Leave your travel planning to AI assistant. Large Language Models are useful for dynamic search about resources available in local communities and their approach to sustainable tourism. Learn to build your own search algorithms.“',
              href: "https://youtu.be/FeCGwBh8Rd8"
            },
            {
              image: './new_perspective.jpg',
              title: 'perspective through lens of AI',
              description: '“Artificial Intelligence is the automation of decision making. Latest advancements in AI technologies has proven data analysis in automated systems performs better than human intelligence and is more reliable in critical or life-threatening situations.“',
              href: "https://youtu.be/MqK3oR13J3Q"
            },
            {
              image: './risk_taking.jpg',
              title: 'success in risk taking',
              description: '“Successful risk takers are process oriented, not results oriented. Learn how to develop the strategy in your work process by taking calculated risks and learning from your expectations intuitively.“',
              href: "https://youtu.be/gISLlXlZnTE"
            },
            {
              image: './about.jpg',
              title: 'what does AI tells about us?',
              description: '“At CO-FUN we are aiming towards collaboration between different industries to cross-evaluate which domains can be improved with automation and assistance of Artificial Intelligence.“',
              href: "https://youtu.be/JCNPlYXdgLs"
            }
          ]} />
        </Box>
      </Flex>
    </>
  );
}