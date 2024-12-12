import { TextBase } from "@co-fun/ui";

export default function Index() {
  return (
    <>
        <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
          Resources
        </TextBase>
        <TextBase textStyle="project-descr" lineHeight="2">
          For educational content explore the resources on our <u><a href="./academy">CO-FUN Academy</a></u>. If you are new member please find references to communication channels from <u><a href="./community">CO-FUN Community</a></u>.
        </TextBase>
        <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
          For other inquiries please contact our team <u><a href="sintija.birgele@syntia.org">sintija.birgele@syntia.org</a></u>.
        </TextBase>
    </>
  );
}