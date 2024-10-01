import { Icon, IconProps } from '@chakra-ui/react';

export const YoutubeIcon = (props: { height?: string; width?: string; fill?: string } & IconProps) => (
  <Icon width="25px" height="18px" viewBox="0 0 25 18" fill="none" {...props}>
    <path d="M20.595 0.184125C16.991 -0.0618748 8.96402 -0.0608748 5.36502 0.184125C1.46802 0.450125 1.00902 2.80412 0.980019 9.00012C1.00902 15.1851 1.46402 17.5491 5.36502 17.8161C8.96502 18.0611 16.991 18.0621 20.595 17.8161C24.492 17.5501 24.951 15.1961 24.98 9.00012C24.951 2.81512 24.496 0.451125 20.595 0.184125ZM9.98002 13.0001V5.00013L17.98 8.99312L9.98002 13.0001Z" fill="#1E1E1E"/>
  </Icon>
)
