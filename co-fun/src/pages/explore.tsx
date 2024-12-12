import { BearAnimation, Box, Link, NavigationChat, Poster, ReviewCards, Timeline } from "@co-fun/ui";

const timelineData: { text: string; alignment: 'left' | 'right'; color: string; content: string }[] = [
  {
    text: 'begin',
    alignment: 'left',
    color: 'primary.white',
    content: "Your adventure begins with a one-night stay in Helsinki, Finland's capital."
  },
  {
    text: 'embark',
    alignment: 'right',
    color: 'primary.white',
    content: "From Helsinki, your charter flight will take you to Scottish port of Aberdeen, the islands of Fair Isle and Jan Mayen, and the amazing Spitsbergen ice edge, where you will embark on your voyage to the North Pole and get acquainted with 50 Years of Victory, the world's largest and most powerful icebreaker."
  },
  {
    text: 'enjoy',
    alignment: 'left',
    color: 'primary.white',
    content: "Watching the ship crush through the Arctic ice pack is a sight you'll never forget, made even more memorable by taking a helicopter flight for a thrilling aerial view of the ship and expansive Arctic Ocean. You can expect days, and hours, to present variable sailing conditions this far north. This means you'll have plenty of time to get to know your shipmates and get immersed into the views of the horizon."
  },
  {
    text: 'embrace',
    alignment: 'right',
    color: 'primary.white',
    content: "All of the anticipation of the past few days reaches a climax as you reach the North Pole! Many travelers find themselves overcome with emotion, while others are in a festive mood. Take photos, wave a flag, and add an exclamation to your success and commemorate this great moment."
  },
  {
    text: 'relax',
    alignment: 'left',
    color: 'primary.white',
    content: "Now you can sit back and relax! Expect more great memories as you head south, you may get lucky and spot a Polar Bear hunting a Seal."
  }
];

const reviewData: { text: string; alignment: 'left' | 'right'; color: string; content: string }[] = [
  { text: 'watch', alignment: 'left', color: 'reviews.darkBlue', content: 'Do you see a Polar Bear?' },
  { text: 'listen', alignment: 'right', color: 'reviews.lightBlue', content: 'Do you hear it? On the land from below the frozen water, snow cover, glaciers, ice sheets, ice shelves and melting icebergs.' },
  { text: 'write', alignment: 'left', color: 'reviews.lightBlue', content: 'Einaudi plays "Elegy for the Arctic", and I immerse myself into this historic performance.' },
  { text: 'express', alignment: 'right', color: 'reviews.darkBlue', content: "There is so much we can feel and experience, only if we're willing to express ourselves by our true nature." },
  { text: 'trust', alignment: 'left', color: 'reviews.blue', content: 'Starting from a foundation of trust, revealing full capabilities of technology and Artificial Intelligence to succeed unimaginable.' }
];

export default function Explore() {
  return (
    <>
    <Box width="100%" bg="primary.white" position="fixed" zIndex="10">
      <NavigationChat />
    </Box>
    <>
    <Box pt={["2.6rem", "3rem"]}>
    <Poster headline="discover" description="The Ultimate AI Adventure" button="Book Request" />
    </Box>
    <Timeline data={timelineData} />
    <Box p="0 5rem">
      <BearAnimation />
    </Box>
    <ReviewCards data={reviewData} />
    <Link href="./community" variant="action">Sign Me Up</Link>
    </>
  </>)
}