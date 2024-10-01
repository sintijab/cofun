import { Flex, Link } from "@chakra-ui/react";
import { TextBase } from "../../foundations";
import { InstagramIcon, LinkedInIcon, XIcon, YoutubeIcon } from "../../co-fun-ui";

export const Footer = ({ columns }: { columns: { title: string; links: { label: string; href: string}[] }[] }) => (
  <Flex justifyContent="flex-start" gap="12%">
    <Flex alignItems="center" height="1.5rem" gap="1rem"><XIcon width="1.5rem" /><InstagramIcon width="1.5rem"/><YoutubeIcon width="1.5rem"/><LinkedInIcon width="1.5rem"/></Flex>
    {columns.map((col) => <Flex direction="column"><TextBase pb="1rem" fontWeight="semibold" textStyle="footer">{col.title}</TextBase>{col.links.map((link => <Link><TextBase textStyle="footer" pb="0.75rem">{link.label}</TextBase></Link>))}</Flex>)}
  </Flex>
)