import { Flex, TextBase } from "@co-fun/ui";

export default function Index() {
  return (
    <>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
        Join Our Community
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        At CO-FUN We continuously grow our community with new clients and professionals to increase the knowledge about AI technologies, provide new services, and find the most suitable industry experts for your team setup.
      </TextBase>
      <Flex><TextBase textStyle="project-descr" lineHeight="2">Invitation link to <u><a href="https://join.slack.com/t/co-fun/shared_invite/zt-2w1cfh47p-PGP6lU3l0JAuP4Z6_EEEQw" target="_blank" rel="noreferrer noopener">Slack workspace</a></u></TextBase></Flex>

      <Flex><TextBase textStyle="project-descr" lineHeight="2">Follow official media channels <u><a href="https://www.instagram.com/co__fun/" target="_blank" rel="noreferrer noopener">@co__fun</a></u></TextBase></Flex>
      <Flex><TextBase textStyle="project-descr" lineHeight="2">Find about the planned events on our <u><a href="./events" target="_blank" rel="noreferrer noopener">website</a></u></TextBase></Flex>
      <TextBase textStyle="initiative-descr" lineHeight="2" p=".5rem 0">
        Our Team
      </TextBase>
      <img src="./A7400653.png" alt="team" width="50%" style={{ margin: "auto" }} />
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        <b>Sintija Birgele</b>, founder of CO-FUN. Aside from her foundations in company her career spans in software architecture and design. She taught web programming for 5 years and is growing the commnuity of professionals with similar career and academic interests. She is a visionaire with advanced skills in extreme sports and disciplines such as freediving and movement choreography and direction.
      </TextBase>
    </>
  );
}