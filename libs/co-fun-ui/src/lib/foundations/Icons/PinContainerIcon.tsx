import { Icon, IconProps } from '@chakra-ui/react';

export const PinContainerIcon = (props: { height?: string; width?: string; fill?: string } & IconProps) => (
  <Icon width="24px" height="44px" viewBox="0 0 24 44" fill="none" {...props}>
    <path d="M12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5Z" stroke="#D2D6DB"/>
    <line x1="11.5" y1="44" x2="11.5" y2="24" stroke="#D2D6DB"/>
  </Icon>
)
