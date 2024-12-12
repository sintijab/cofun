import {
  Box,
  ChakraBaseProvider,
  extendTheme,
  Flex,
  Heading,
  Input as InputBase,
  Textarea
} from '@chakra-ui/react';

import { AvatarIcon, BackIcon, ButtonPrimary, CalendarIcon, CertificateIcon, ChatSingleIcon, DiagramIcon, EditIcon, ExploreIcon, HamburgerIcon, HamburgerMenuIcon, Link, Logo, MicrophoneIcon, MonitorIcon, NetworkIcon, PlusIcon, ProfileAvatarIcon, SettingsIcon, StarIcon, StarIconFilled, StarsIcon, TextBase, TrendsIcon, VerticalEllipsisIcon, WalletIcon, } from './foundations';
import { NavigationTop, Hero, HeroMinimal, Card, Activity, Footer, HeroPersonal, Pagination, NavigationSide, NavigationChat, ConversationsList, ConvoListItem, Messages, Rating, Input, Loader, ButtonList, ModalBase, Sketch, Carousel, StackedSingleBar, Timeline, BearAnimation, ReviewCards, PricingTable } from './components';
import { CardDeck, SectionLayout, ActivityGroup, ProjectList } from './patterns';
import { Project, InitiativeOverview, ProjectDetails, AIAssistantChat } from './templates';
import { buttonTheme } from './foundations/Button/theme';
import { linkTheme } from './foundations/Link/theme';
import { textTheme } from './foundations/Typography/TextBase/theme';
import colorTheme from './foundations/Colors/theme';
import { cardTheme } from './components/Card/theme';
import * as iconsBase from './foundations/Icons';
import { loaderTheme } from './components/Loader/theme';
import { headlineH1Theme } from './components/Headline/theme';
import { Poster } from './components/Headline';
import './globals.css';

const theme = extendTheme({
  components: { Button: buttonTheme, Link: linkTheme, TextBase: textTheme, Card: cardTheme, Loader: loaderTheme, Heading: headlineH1Theme },
  colors: colorTheme.colors,
  fonts: {
    body: '"Jost", sans-serif;',
    heading: '"Inter", sans-serif;',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  textStyles: {
    'hero-h1': {
      // fontSize: ['48px', '72px'],
      fontSize: ['44pt','54pt'],
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
      fontSize: ['16.75pt', '18.75pt']
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
    },
    'button-select': {
      fontFamily: '"Inter", sans-serif;',
      fontSize: '11.5pt',
      color: 'primary.default'
    },
    'button-select-title': {
      fontFamily: '"Inter", sans-serif;',
      fontSize: '12.5pt',
      fontWeight: 600,
      color: 'primary.default'
    },
    'button-select-info': {
      fontFamily: '"Inter", sans-serif;',
      fontSize: '11pt',
      fontWeight: 600,
      color: 'primary.default'
    },
    'button-select-descr': {
      fontFamily: '"Inter", sans-serif;',
      fontSize: '11pt',
      fontWeight: 400,
      color: 'primary.default'
    },
    'poster-descr': {
      display: 'block',
      fontSize: '1em',
      letterSpacing: '5px',
      fontWeight: '500',
      textTransform: 'uppercase',
      color: 'secondary.info',
      paddingTop: '0.8em',
      marginBottom: '0.6em'
    },
    'background-review': {
      fontSize: ["1.7rem", "2rem"],
      fontFamily: '"gingerRegular"',
      color: 'reviews.regular'
    },
    'background-text': {
      fontSize: ['8em', '14em'],
      color: 'background.text',
      fontFamily: '"gingerBold"'
    }
  }
})

export function CoFunUiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraBaseProvider theme={theme}>
      {children}
    </ChakraBaseProvider>
  );
}

const { SearchIcon, ArrowDownIcon, BellIcon, BookmarkIcon, FilterIcon, GiftIcon, ShareIcon, SupportIcon, UserAddIcon, EndorsementIcon, PinContainerIcon, ChatIcon, LinkedInIcon, InstagramIcon, XIcon, YoutubeIcon, UserPlusIcon, ToggleOnIcon, SearchThinIcon, FilterFollowingIcon, ArrowLeftIcon, ArrowRightIcon, LipsIcon } = iconsBase;
const icons = [SearchIcon, ArrowDownIcon, BellIcon, BookmarkIcon, FilterIcon, GiftIcon, ShareIcon, SupportIcon, UserAddIcon, EndorsementIcon, PinContainerIcon, ChatIcon, LinkedInIcon, InstagramIcon, XIcon, YoutubeIcon, UserPlusIcon, ToggleOnIcon, SearchThinIcon, FilterFollowingIcon, ArrowLeftIcon, ArrowRightIcon, ProfileAvatarIcon, HamburgerMenuIcon, PlusIcon, ChatSingleIcon, TrendsIcon, ExploreIcon, WalletIcon, SettingsIcon, BackIcon, CalendarIcon, VerticalEllipsisIcon, EditIcon, StarIcon, StarIconFilled, MicrophoneIcon, LipsIcon, MonitorIcon, DiagramIcon, NetworkIcon, NetworkIcon, CertificateIcon, HamburgerIcon];

export { Flex, Box, ButtonPrimary, Link, NavigationTop, SearchIcon, ArrowDownIcon, BellIcon, BookmarkIcon, FilterIcon, GiftIcon, ShareIcon, SupportIcon, UserAddIcon, EndorsementIcon, LinkedInIcon, InstagramIcon, XIcon, YoutubeIcon, Logo, Hero, Card, TextBase, CardDeck, SectionLayout, HeroMinimal, Activity, ActivityGroup, Project, InitiativeOverview, Footer, HeroPersonal, PinContainerIcon, UserPlusIcon, ToggleOnIcon, ChatIcon, ProjectList, ProjectDetails, SearchThinIcon, FilterFollowingIcon, ArrowLeftIcon, ArrowRightIcon, icons, Pagination, ProfileAvatarIcon, HamburgerMenuIcon, PlusIcon, ChatSingleIcon, TrendsIcon, ExploreIcon, WalletIcon, SettingsIcon, BackIcon, CalendarIcon, VerticalEllipsisIcon, NavigationSide, NavigationChat, ConversationsList, AvatarIcon, EditIcon, ConvoListItem, Messages, Rating, Input, AIAssistantChat, Loader, LipsIcon, ButtonList, ModalBase, Sketch, Carousel, StackedSingleBar, Heading, Poster, Timeline, BearAnimation, ReviewCards, MonitorIcon, DiagramIcon, NetworkIcon, CertificateIcon, StarsIcon, PricingTable, InputBase, Textarea, HamburgerIcon };

export default CoFunUiProvider;

