import { Icon, IconProps } from '@chakra-ui/react';

export const PlusIcon = (props: { height?: string; width?: string; fill?: string } & IconProps) => (
  <Icon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="#31111D"/>
  </Icon>
)
