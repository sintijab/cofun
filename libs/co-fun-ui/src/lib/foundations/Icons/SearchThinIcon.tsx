import { Icon, IconProps } from '@chakra-ui/react';

export const SearchThinIcon = (props: { height?: string; width?: string; fill?: string } & IconProps) => (
  <Icon width="24px" height="24px" viewBox="0 0 24 24" fill="none" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11ZM11 1.25C5.61522 1.25 1.25 5.61522 1.25 11C1.25 16.3848 5.61522 20.75 11 20.75C13.4224 20.75 15.6385 19.8666 17.3437 18.4043L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L18.4043 17.3437C19.8666 15.6385 20.75 13.4224 20.75 11C20.75 5.61522 16.3848 1.25 11 1.25Z" fill="#0A0E15"/>
  </Icon>
)
