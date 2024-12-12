import { Flex, TextBase } from "@co-fun/ui";

export default function Index() {
  return (
    <>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
        Form Builder powered with AI
      </TextBase>
      <TextBase textStyle="initiative-descr" lineHeight="2" p="2rem 0 .5rem 0">
        AI Chatbot Form Builder
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        We build interfaces that are easily adaptable to intelligent systems. Our main focus is automating workflows and simplifying the user experience in system modelling towards user-centric and data-driven design approach. Imitating real human communication and interactions is the key component in our software development. It reduces an costs and overhead of maintenance in building web application interfaces for simple business cases.
      </TextBase>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/clddPytzfwM?si=XRWYvrsB27x_QIRm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </>
  );
}