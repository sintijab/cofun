import { Icon, IconProps } from '@chakra-ui/react';

export const SupportIcon = (props: { height?: string; width?: string; fill?: string } & IconProps) => (
  <Icon width="32px" height="38px" viewBox="0 0 32 38" fill="none" {...props}>
    <path d="M12.5 4.65327C13.6229 2.57644 16.0176 1.22424 18.6965 1.54773C21.7676 1.91651 24 4.54975 24 7.51295C24 10.7091 22.6741 13.7693 20.3132 16.0273L12.5 23.5L4.68677 16.0273C2.32588 13.7693 1 10.7091 1 7.51295C1 4.388 3.48941 1.6836 6.75 1.50891C9.24618 1.37951 11.4447 2.6929 12.5 4.65327Z" stroke="#303030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30.8148 30.8805L25.8491 26.2505C25.078 25.5315 24.0294 25.1289 22.9396 25.1289H21.5619L19.5057 26.0875H15.3934C14.2625 26.0875 13.3372 26.9503 13.3372 28.0047V29.9219" stroke="#303030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24.6462 36.6326L22.59 34.7154H10.2529L1 26.0879L2.61412 25.7141C4.18711 25.3498 5.86291 25.6853 7.12747 26.6343L11.281 29.9224H19.5057" stroke="#303030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
)
