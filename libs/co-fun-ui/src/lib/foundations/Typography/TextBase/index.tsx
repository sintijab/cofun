import { Text, HeadingProps } from '@chakra-ui/react';

export const TextBase = ({ children, ...props }: { children?: (string | Element) | (string | React.JSX.Element)[] } & HeadingProps) => (
  <Text {...props}  >
    {children}
  </Text>
)
