import { TextBase } from "@co-fun/ui";

export default function Index() {
  return (
    <>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
        Analytics
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        In order to navigate on this website and use all of its features, necessary cookies are required. However we don't use “cross-site tracking”. We do not collect personal data to use it for ads or compromising a persons online identity.
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        Co-FUN establishes what is known as Cookieless tracking. It is an alternative form of tracking that uses methods of unique address and browser fingerprint to identify user sessions instead of online identities. It means that we use anonimized data for tracing browsing patterns and sessions on website.
      </TextBase>
    </>
  );
}