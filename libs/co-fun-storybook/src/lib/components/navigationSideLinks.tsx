import { ChatSingleIcon, ExploreIcon, SettingsIcon, TrendsIcon, WalletIcon } from "@co-fun/ui";

export const navigationSideLinks = {
  links: [
    {
      label: 'Chat',
      href: '#creators',
      icon: <ChatSingleIcon w="1.5rem" h="1.5rem" />,
      isActive: true,
    },
    {
      label: 'Trends',
      href: '#startups',
      icon: <TrendsIcon w="1.5rem" h="1.5rem" />
    },
    {
      label: 'Explore',
      href: '#features',
      icon: <ExploreIcon w="1.5rem" h="1.5rem" />
    },
    {
      label: 'Wallet',
      href: '#pricing',
      icon: <WalletIcon w="1.5rem" h="1.5rem" />
    },
    {
      label: 'Settings',
      href: '#settings',
      icon: <SettingsIcon w="2.125rem" h="2.125rem"/>
    }
  ],
};