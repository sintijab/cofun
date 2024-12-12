import { Box, TextBase } from "@co-fun/ui";

export default function Index() {
  return (
    <>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
        Events
      </TextBase>
      <TextBase textStyle="project-title" lineHeight="2" p="1rem 0">
        Upcoming Events
      </TextBase>
      <Box display={["block", "flex"]}>
        <img src="./kan.jpg" alt="gitnation" width="500px" />
        <TextBase textStyle="project-descr" lineHeight="2" p=".5rem">
          <u><a href="https://www.tulumcryptofest.com/" target="blank">The Tulum Crypto Fest</a></u> is an event about latest trends in decentralized technologies, investments and web3 innovations. The event will happen from 12 to 15th of December, 2024. Join our team onsite to discuss our future plans and plan new exciting projects at Tulum, Mexico.
        </TextBase>
      </Box>
      <TextBase textStyle="project-title" lineHeight="2" mt="2rem">
        Past Events
      </TextBase>
      <Box display={["block", "flex"]}>
        <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
          JSNation is the annual JavaScript conference where our team joined onsite from 13 to 17th of June, 2024. Conference was held in Amsterdam with 50 speakers, 1.5K attendees and social and networking events. Sintija Birgele, founder of CO-FUN was participating at JSNation with her talk about Internationalization (i18n) With AI-Powered Language Model. Watch it on <u><a href="https://gitnation.com/contents/internationalization-i18n-with-ai-powered-language-model" target="blank">GitNation</a></u>.
        </TextBase>
        <img src="./GitNation_Amsterdam.jpg" alt="gitnation" width="500px" />
      </Box>
    </>
  );
}