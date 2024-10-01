import {
  Box,
  ChakraBaseProvider,
  extendTheme,
} from '@chakra-ui/react';
import { AvatarIcon, BackIcon, ButtonPrimary, CalendarIcon, ChatSingleIcon, EditIcon, ExploreIcon, HamburgerMenuIcon, Link, Logo, MicrophoneIcon, PlusIcon, ProfileAvatarIcon, SettingsIcon, StarIcon, StarIconFilled, TextBase, TrendsIcon, VerticalEllipsisIcon, WalletIcon, } from './foundations';
import { NavigationTop, Hero, HeroMinimal, Card, Activity, Footer, HeroPersonal, Pagination, NavigationSide, NavigationChat, ConversationsList, ConvoListItem, Messages, Rating, Input } from './components';
import { CardDeck, SectionLayout, ActivityGroup, ProjectList } from './patterns';
import { Project, InitiativeOverview, ProjectDetails, AIAssistantChat } from './templates';
import { buttonTheme } from './foundations/Button/theme';
import { linkTheme } from './foundations/Link/theme';
import { textTheme } from './foundations/Typography/TextBase/theme';
import colorTheme from './foundations/Colors/theme';
import { cardTheme } from './components/Card/theme';
import * as iconsBase from './foundations/Icons';

const theme = extendTheme({
  components: { Button: buttonTheme, Link: linkTheme, TextBase: textTheme, Card: cardTheme },
  colors: colorTheme.colors,
  fonts: {
    body: '"Jost", sans-serif;',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  textStyles: {
    'hero-h1': {
      // fontSize: ['48px', '72px'],
      fontSize: '54pt',
      fontFamily: '"Inter", sans-serif;',
      fontWeight: '700',
      lineHeight: '120%',
      letterSpacing: '-0.03em',
      display: 'inline-block'
    },
    'hero-h2': {
      fontSize: '36pt',
      fontFamily: '"Inter", sans-serif;',
      fontWeight: '700',
      lineHeight: '120%',
      letterSpacing: '-0.03em',
      display: 'inline-block'
    },
    'label-medium': {
      fontFamily: '"Poppins", sans-serif;',
      fontWeight: 'medium',
      letterSpacing: '0.01em',
      fontSize: '13.5pt',
    },
    'label-bold': {
      fontFamily: '"Poppins", sans-serif;',
      fontWeight: 'bold',
      letterSpacing: '0.01em',
      fontSize: '13.5pt'
    },
    'heading': {
      fontFamily: '"Poppins", sans-serif;',
      fontSize: '24pt',
      fontWeight: 'medium',
    },
    'subheading': {
      fontFamily: '"Poppins", sans-serif;',
      fontSize: '13.5pt',
      letterSpacing: '0.001em'
    },
    'activity-title': {
      fontWeight: 'semibold',
      lineHeight: '120%',
      letterSpacing: '-0.02em',
      fontSize: '18.75pt'
    },
    'activity-descr': {
      lineHeight: '130%',
      fontWeight: 'normal',
      letterSpacing: '0.01em',
    },
    'project-title': {
      fontFamily: '"Inter", sans-serif;',
      fontSize: '18pt',
      letterSpacing: '-0.02em',
      lineHeight: '120%',
      fontWeight: 'semibold',
    },
    'project-author': {
      fontFamily: '"Inter", sans-serif;',
      fontSize: '12pt',
      lineHeight: '140%',
      letterSpacing: '0.01em',
      fontWeight: 'semibold',
      color: 'secondary.default'
    },
    'initiative-descr': {
      fontFamily: '"Inter", sans-serif;',
      fontSize: '18pt',
      letterSpacing: "0.01em",
      fontWeight: "medium",
      lineHeight: '140%',
    },
    'project-descr': {
      fontFamily: '"Inter", sans-serif;',
      fontSize: '12pt',
      lineHeight: '140%',
      letterSpacing: '0.01em',
      color: 'secondary.default'
    },
    'activity-labels': {
      fontFamily: '"Sen", sans-serif;',
      fontSize: '13.5pt',
      color: 'secondary.default'
    },
    'initiative-labels': {
      fontFamily: '"Inter", sans-serif;',
      fontSize: '10.5pt',
      textTransform: 'none'
    },
    'footer': {
      fontFamily: '"Inter", sans-serif;',
      fontSize: '10.5pt',
      letterSpacing: '0.0em',
      lineHeight: '140%'
    },
    'project-list-title': {
      fontFamily: '"Inter", sans-serif;',
      fontSize: '16.5pt',
      lineHeight: '180%',
      color: 'primary.default'
    },
    'project-list-descr': {
      fontFamily: '"Inter", sans-serif;',
      fontSize: '10.5pt',
      color: 'primary.default'
    },
    'chat': {
      fontFamily: '"Roboto", sans-serif;',
      fontSize: '12pt',
      lineHeight: '150%',
    },
    'chat-time': {
      fontFamily: '"Roboto", sans-serif;',
      letterSpacing: "0.05em",
      fontSize: "9pt",
      fontWeight: "500",
    }
  }
})

export function CoFunUiProvider({ children }: { children: React.ReactElement}) {
  return (
    <ChakraBaseProvider theme={theme}>
      {children}
    </ChakraBaseProvider>
  );
}

const { SearchIcon, ArrowDownIcon, BellIcon, BookmarkIcon, FilterIcon, GiftIcon, ShareIcon, SupportIcon, UserAddIcon, EndorsementIcon, PinContainerIcon, ChatIcon, LinkedInIcon, InstagramIcon, XIcon, YoutubeIcon, UserPlusIcon, ToggleOnIcon, SearchThinIcon, FilterFollowingIcon, ArrowLeftIcon, ArrowRightIcon } = iconsBase;
const icons = [SearchIcon, ArrowDownIcon, BellIcon, BookmarkIcon, FilterIcon, GiftIcon, ShareIcon, SupportIcon, UserAddIcon, EndorsementIcon, PinContainerIcon, ChatIcon, LinkedInIcon, InstagramIcon, XIcon, YoutubeIcon, UserPlusIcon, ToggleOnIcon, SearchThinIcon, FilterFollowingIcon, ArrowLeftIcon, ArrowRightIcon, ProfileAvatarIcon, HamburgerMenuIcon, PlusIcon, ChatSingleIcon, TrendsIcon, ExploreIcon, WalletIcon, SettingsIcon, BackIcon, CalendarIcon, VerticalEllipsisIcon, EditIcon, StarIcon, StarIconFilled, MicrophoneIcon ];

export { Box, ButtonPrimary, Link, NavigationTop, SearchIcon, ArrowDownIcon, BellIcon, BookmarkIcon, FilterIcon, GiftIcon, ShareIcon, SupportIcon, UserAddIcon, EndorsementIcon, LinkedInIcon, InstagramIcon, XIcon, YoutubeIcon, Logo, Hero, Card, TextBase, CardDeck, SectionLayout, HeroMinimal, Activity, ActivityGroup, Project, InitiativeOverview, Footer, HeroPersonal, PinContainerIcon, UserPlusIcon, ToggleOnIcon, ChatIcon, ProjectList, ProjectDetails, SearchThinIcon, FilterFollowingIcon, ArrowLeftIcon, ArrowRightIcon, icons, Pagination, ProfileAvatarIcon, HamburgerMenuIcon, PlusIcon, ChatSingleIcon, TrendsIcon, ExploreIcon, WalletIcon, SettingsIcon, BackIcon, CalendarIcon, VerticalEllipsisIcon, NavigationSide, NavigationChat, ConversationsList, AvatarIcon, EditIcon, ConvoListItem, Messages, Rating, Input, AIAssistantChat };

export default CoFunUiProvider;

