import { Box, Flex, Link } from "@chakra-ui/react";
import { ChatSingleIcon, ExploreIcon, HamburgerMenuIcon, PlusIcon, ProfileAvatarIcon, SettingsIcon, TextBase, TrendsIcon, WalletIcon } from "../../foundations";

export type INavigationBase = { label: string; href: string; icon: React.ReactElement, isActive?: boolean };
export const navigationSideLinks = [
  {
    label: 'Chat',
    href: '/chat',
    icon: <ChatSingleIcon w="1.5rem" h="1.5rem" />,
    isActive: true,
  },
  {
    label: 'Trends',
    href: '/trends',
    icon: <TrendsIcon w="1.5rem" h="1.5rem" />
  },
  {
    label: 'Explore',
    href: '/explore',
    icon: <ExploreIcon w="1.5rem" h="1.5rem" />
  },
  {
    label: 'Wallet',
    href: '/wallet',
    icon: <WalletIcon w="1.5rem" h="1.5rem" />
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: <SettingsIcon w="2.125rem" h="2.125rem"/>
  }
];

export const NavigationSide = ({ links = navigationSideLinks, pathname }: { links?: INavigationBase[], pathname?: string }) => {
  return (
    <Flex bg="navigation.lightLilac" p=".5rem" boxSizing="content-box" direction="column" maxWidth="4.5rem" width="fit-content" alignItems="center" zIndex="1">
      <Link><ProfileAvatarIcon w="2.5rem" h="2.5rem" mb="0.75rem" mt="2.25rem" /></Link>
      <Link><Flex w="3rem" h="3rem" borderRadius="1rem" justifyContent="center" alignItems="center" mb="0.938rem" _hover={{ boxShadow: "inset 0 0 0 150px rgba(0, 0, 0, 0.04)" }}><HamburgerMenuIcon /></Flex></Link>
      <Link><Box w="3rem" h="3rem" borderRadius="1rem" textAlign="center" lineHeight="3rem" bg="navigation.lilac" mb="2.313rem" boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)" _hover={{ boxShadow: "inset 0 0 0 150px rgba(0, 0, 0, 0.04)" }}><PlusIcon w="1.5rem" h="1.5rem" /></Box></Link>
      {!!links && links?.map((link, i) => (
        <Link key={`nav-${i}`} href={link?.href} display="block" textAlign="center" mb="0.75rem">
          <Box mb="0.25rem" p="0.25rem 1rem" bg={pathname && link.href.includes(pathname) ? "navigation.activeLilac" : "transparent"} borderRadius="6.25rem" _hover={{ boxShadow: "inset 0 0 0 150px rgba(0, 0, 0, 0.05)" }}>{link?.icon}</Box>
          <TextBase>{link?.label}</TextBase>
        </Link>
      ))}
    </Flex>
)}