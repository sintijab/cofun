import { Text, HeadingProps } from '@chakra-ui/react';

export const TextBase = ({ children, ...props }: { children: string } & HeadingProps) => (
  <Text {...props}  >
    {children}
  </Text>
)
