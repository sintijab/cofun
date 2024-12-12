import { Icon, IconProps } from '@chakra-ui/react';

export const HamburgerMenuIcon = (props: { height?: string; width?: string; fill?: string } & IconProps) => (
  <Icon width="28px" height="18px" viewBox="0 0 28 18" fill="none" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0.5 1C0.5 0.585786 0.835786 0.25 1.25 0.25H26.75C27.1642 0.25 27.5 0.585786 27.5 1C27.5 1.41421 27.1642 1.75 26.75 1.75H1.25C0.835786 1.75 0.5 1.41421 0.5 1ZM0.5 9C0.5 8.58579 0.835786 8.25 1.25 8.25H26.75C27.1642 8.25 27.5 8.58579 27.5 9C27.5 9.41421 27.1642 9.75 26.75 9.75H1.25C0.835786 9.75 0.5 9.41421 0.5 9ZM1.25 16.25C0.835786 16.25 0.5 16.5858 0.5 17C0.5 17.4142 0.835786 17.75 1.25 17.75H26.75C27.1642 17.75 27.5 17.4142 27.5 17C27.5 16.5858 27.1642 16.25 26.75 16.25H1.25Z" fill="#0A0E15"/>
</Icon>
)
