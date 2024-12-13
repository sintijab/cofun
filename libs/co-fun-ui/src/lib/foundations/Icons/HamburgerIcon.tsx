import { Icon, IconProps } from '@chakra-ui/react';

export const HamburgerIcon = (props: { height?: string; width?: string; fill?: string } & IconProps) => (
  <Icon width="36px" height="36px" viewBox="0 0 1024 1024" fill="none" {...props}>
      <path d="M196.266667 277.333333h635.733333c17.066667 0 34.133333-12.8 34.133333-34.133333s-17.066667-29.866667-38.4-29.866667H196.266667c-21.333333 0-34.133333 17.066667-34.133334 34.133334s12.8 29.866667 34.133334 29.866666zM827.733333 477.866667H196.266667c-17.066667 0-34.133333 12.8-34.133334 34.133333s12.8 34.133333 34.133334 34.133333h635.733333c17.066667 0 34.133333-12.8 34.133333-34.133333s-17.066667-34.133333-38.4-34.133333zM827.733333 746.666667H196.266667c-17.066667 0-34.133333 12.8-34.133334 34.133333s12.8 29.866667 34.133334 29.866667h635.733333c17.066667 0 34.133333-12.8 34.133333-34.133334s-17.066667-29.866667-38.4-29.866666z" fill={props.fill || "#111111"} />
</Icon>
)