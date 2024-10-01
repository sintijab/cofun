import { Icon, IconProps } from '@chakra-ui/react';

export const BackIcon = (props: { height?: string; width?: string; fill?: string } & IconProps) => (
  <Icon width="16px" height="16px" viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#1D1B20"/>
  </Icon>
)