import { Flex, TextBase } from "@co-fun/ui";

export default function Index() {
  return (
    <>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
        Early Adaptation to AI Technology
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        Why do we never expect unexpected events?
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        Lebanese writer Nassim Nicholas Taleb calls this phenomenon a black swan. Black swan is our inability to predict the future from the past. it is also why some superficial ideas taken from not calculated decisions takes a hold, while others bloom briefly before disappearing from the public eye.
      </TextBase>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/nnXD8mBwP-s?si=DTN9HkSfRmxuoCGj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <TextBase textStyle="initiative-descr" lineHeight="2">
        Rise of Innovation
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        Translating it into the graph, the development takes the form of a curve typical of the progress of an epidemic. It rises, gradually at first, then reaches the critical point of any newly launched product, when many products fail. The critical point for any innovation is the transition from the early adopters to the sceptics, for at this point there is a 'chasm'. According to the US sociologist Morton Grodzins, if the early adopters succeed in getting the innovation accross the chasm to the sceptical masses, the epidemic cycle reaches the tipping point. From there, the curve rises sharply when the market adaption has reached success point.
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight="2">
        Faith in <s>our knowledge</s> AI
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        One thing is undisputed- the world around us becomes increasingly fast-paced and complex, the amount that we really know -- that we can rarely grasp and understand-- decreases. Today it is more or less taken for granted that we do not understand many of the things that surround us and that we use believing we know that it works, for instance, our smartphones. As a result, we tend to assign more importance to those who can actually explain something than to their actual explenation. It has become the norm to convince the people with images and emotions rather than with the arguments, because we are no longer able to understand increasingly complex explanations.
      </TextBase>
      <iframe width="560px" height="315" src="https://www.youtube.com/embed/EZEOSj25xMY?si=tVp6_9LydnTcC4zZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </>
  );
}