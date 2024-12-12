import { Icon, IconProps } from '@chakra-ui/react';

export const EndorsementIcon = (props: { height?: string; width?: string; fill?: string, strokeColor?: string } & IconProps): React.ReactElement => (
  <Icon width="24px" height="24px" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 4.15327C13.0741 2.07644 15.3647 0.724237 17.9271 1.04773C20.8647 1.41651 23 4.04975 23 7.01295C23 10.2091 21.7318 13.2693 19.4735 15.5273L12 23L4.52647 15.5273C2.26824 13.2693 1 10.2091 1 7.01295C1 3.888 3.38118 1.1836 6.5 1.00891C8.88765 0.879514 10.9906 2.1929 12 4.15327Z" stroke={props.strokeColor || "#000000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.64706 10.707H6.93353C7.27647 10.707 7.60647 10.8429 7.84588 11.0888L9.40529 12.648C9.40529 13.3597 9.98764 13.942 10.6994 13.942C11.4112 13.942 11.9935 14.5243 11.9935 15.2359V15.8829L10.6994 17.1769H6.17"  stroke={props.strokeColor || "#000000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.0588 3.58984L19.1176 5.5308V6.82478H15.2353L13.0288 9.031C12.7829 9.27686 12.6471 9.60035 12.6471 9.94326V10.0532C12.6471 10.7649 13.2294 11.3472 13.9412 11.3472H15.2353L17.1765 13.2882V15.2291L18.4706 16.5231"  stroke={props.strokeColor || "#000000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.58824 2.94336L4.88235 4.23733V5.53131C4.88235 6.24299 4.3 6.82528 3.58824 6.82528H1"  stroke={props.strokeColor || "#000000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
)