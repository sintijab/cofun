import { Box, Flex, Link } from "@chakra-ui/react";
import { HamburgerMenuIcon, PlusIcon, ProfileAvatarIcon, TextBase } from "../../foundations";

export type INavigationBase = { label: string; href: string; icon: React.ReactElement, isActive?: boolean };

export const NavigationSide = ({ links }: { links: INavigationBase[] }) => (
  <Flex bg="navigation.lightLilac" p=".5rem" boxSizing="content-box" direction="column" maxWidth="4.5rem" width="fit-content" alignItems="center" zIndex="1">
    <Link><ProfileAvatarIcon w="2.5rem" h="2.5rem" mb="0.75rem" mt="2.25rem" /></Link>
    <Link><HamburgerMenuIcon mb="0.938rem" /></Link>
    <Link><Box w="3rem" h="3rem" borderRadius="1rem" textAlign="center" lineHeight="3rem" bg="navigation.lilac" mb="2.313rem" boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"><PlusIcon w="1.5rem" h="1.5rem" /></Box></Link>
    {!!links && links?.map((link) => (
      <Link href={link?.href} display="block" textAlign="center" mb="0.75rem">
        <Box mb="0.25rem" p="0.25rem 1rem" bg={link.isActive ? "navigation.activeLilac" : "transparent"} borderRadius="6.25rem">{link?.icon}</Box>
        <TextBase>{link?.label}</TextBase>
      </Link>
    ))}
  </Flex>
)