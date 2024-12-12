import { Flex, TextBase } from "@co-fun/ui";

export default function Index() {
  return (
    <>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
        Learning with Second-Order Observation
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight={["1.5", "2"]}>
        Reflecting on your actions and learning from them sounds simple, but it's almost impossible. This theory is based on idea of a 'second-order' observation.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        First-order observers see things how they appear to them. For them, the world is simply there, a quincidentially. Second-order observers, on the other hand, attribute what first-order observers see and how they see it. First-order observers are unaware of their own way of observing- it's their blind spot.  Recognizing this blind spot makes you a second-order observer.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        In this process you are able to point out that it is possible to see things differently.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        In a single loop scenario something that works well is not changed but repeated. In the worst case practice the same mistake is repeated, or a problem is solved without answering a question how it arose in the first place.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        In a double-loop learning, you think about what you do and try to break the pattern not by simply doing things differentlu, but by thinking why you are doing it in a such a way you used to, What are the objectives and values behind your actions? If you are fully aware of them, you may be able to change them,
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        The problem inherent in the double loop is the discripency between what we say we are about to do (known as 'espoused theory') and what we actually do (known as 'theory in use'). If we really want to change something, it isn't enough to create a guidelines to our employees and ourselves, or to give directives. These only reach us as a command. Real changes occur when we reassess our more deeply rooted reasons, objectives and values. These are the 'force fields' that affect the 'theory in use'.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        When was the last time you broke a familiar pattern in your life and really did something differently? Which pattern would you like to break?  is preventing you from breaking it?
      </TextBase>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/DxDsYawE6Vo?si=GjxzjBU3HMmvDKwX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </>
  );
}