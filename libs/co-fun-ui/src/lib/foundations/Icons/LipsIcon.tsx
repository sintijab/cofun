import { Icon, IconProps } from '@chakra-ui/react';

export const LipsIcon = (props: { height?: string; width?: string; fill?: string } & IconProps) => (
  <Icon width="300px" height="300px" viewBox="7.5 12 15 6" {...props}>
    <defs>
      <path id="curve" d="M0,0  c2,0 3,-3, 5,-3  s3,3 5,3"></path>
    </defs>
    <use xlinkHref="#curve" x="8" y="15" opacity=".7" fill="mediumvioletred"></use>
    <use xlinkHref="#curve" x="12" y="15" opacity=".7" fill="hotpink"></use>
    <use xlinkHref="#curve" x="12" y="30" opacity=".5" fill="deeppink" transform="scale(1   .5)"></use>
    <use xlinkHref="#curve" x="12" y="30" opacity=".5" fill="tomato" transform="scale(1  -.5) translate( 0 -60)"></use>
    <use xlinkHref="#curve" x="12" y="30" opacity=".5" fill="red" transform="scale(1.5 -1) translate(-7 -45)"></use>
    <use xlinkHref="#curve" x="12" y="30" opacity=".3" fill="white" transform="scale(1 -.75) translate(-4 -50)"></use>
  </Icon>
)
