import { Flex, Link } from "@chakra-ui/react";
import { TextBase } from "../../foundations";
import { InstagramIcon, LinkedInIcon, XIcon, YoutubeIcon } from "../../co-fun-ui";

export const Footer = ({ columns, ...props }: { columns: { title: string; links: { label: string; href: string}[] }[] }) => (
  <Flex justifyContent="flex-start" gap="12%" flexWrap="wrap" {...props}>
    <Flex alignItems="center" height="1.5rem" gap="1rem"><a target="_blank" rel="noreferrer noopener" href="https://instagram.com/co__fun"><InstagramIcon width="1.5rem"/></a><a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/@cofuninc"><YoutubeIcon width="1.8rem"/></a><a target="_blank" rel="noreferrer noopener" href="https://x.com/synthactics"><XIcon width="1.3rem" /></a><a target="_blank" rel="noreferrer noopener" href="https://de.linkedin.com/in/sintija-birgele"><LinkedInIcon width="1.5rem"/></a></Flex>
    {columns.map((col, colIndex) => <Flex direction="column" key={`footer-col-` + colIndex}><TextBase pb="1rem" fontWeight="semibold" textStyle="footer">{col.title}</TextBase>{col.links.map(((link, linkIndex) => <Link key={`footer-link-` + linkIndex} href={link.href}><TextBase textStyle="footer" pb="0.75rem">{link.label}</TextBase></Link>))}</Flex>)}
  </Flex>
)