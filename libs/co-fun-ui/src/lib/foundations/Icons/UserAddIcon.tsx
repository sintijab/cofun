import { Icon, IconProps } from '@chakra-ui/react';

export const UserAddIcon = (props: { height?: string; width?: string; fill?: string } & IconProps) => (
  <Icon width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <path d="M1 17.2719C0.999932 17.8242 1.44759 18.2719 1.99988 18.272C2.55216 18.2721 2.99993 17.8244 3 17.2721L1 17.2719ZM2.00034 14.5444L3.00034 14.5446L2.00034 14.5444ZM10.5 12.8175C11.0523 12.8175 11.5 12.3698 11.5 11.8175C11.5 11.2652 11.0523 10.8175 10.5 10.8175V12.8175ZM18 13.7266C18.5523 13.7266 19 13.2788 19 12.7266C19 12.1743 18.5523 11.7266 18 11.7266V13.7266ZM13.5 11.7266C12.9477 11.7266 12.5 12.1743 12.5 12.7266C12.5 13.2788 12.9477 13.7266 13.5 13.7266V11.7266ZM14.75 14.7719C14.75 15.3242 15.1977 15.7719 15.75 15.7719C16.3023 15.7719 16.75 15.3242 16.75 14.7719H14.75ZM16.75 10.681C16.75 10.1287 16.3023 9.681 15.75 9.681C15.1977 9.681 14.75 10.1287 14.75 10.681H16.75ZM11 5.45383C11 6.32023 10.1964 7.18111 9 7.18111V9.18111C11.1173 9.18111 13 7.59991 13 5.45383H11ZM9 7.18111C7.8036 7.18111 7 6.32023 7 5.45383H5C5 7.59991 6.88268 9.18111 9 9.18111V7.18111ZM7 5.45383C7 4.58744 7.8036 3.72656 9 3.72656V1.72656C6.88268 1.72656 5 3.30776 5 5.45383H7ZM9 3.72656C10.1964 3.72656 11 4.58744 11 5.45383H13C13 3.30776 11.1173 1.72656 9 1.72656V3.72656ZM3 17.2721L3.00034 14.5446L1.00034 14.5443L1 17.2719L3 17.2721ZM5.00034 10.8175C2.88318 10.8175 1.0006 12.3984 1.00034 14.5443L3.00034 14.5446C3.00044 13.6782 3.80404 12.8175 5.00034 12.8175V10.8175ZM5.00034 12.8175H10.5V10.8175H5.00034V12.8175ZM18 11.7266H15.75V13.7266H18V11.7266ZM15.75 11.7266H13.5V13.7266H15.75V11.7266ZM16.75 14.7719V12.7266H14.75V14.7719H16.75ZM16.75 12.7266V10.681H14.75V12.7266H16.75Z" fill={props?.fill || "#000000"} />
  </Icon>
)