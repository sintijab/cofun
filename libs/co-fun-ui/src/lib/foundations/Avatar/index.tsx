import { Flex } from "@chakra-ui/react";

export const AvatarIcon = ({ children, ...props }: any) => (<Flex border="1px" borderColor="secondary.default" borderRadius="50%" w="2.5rem" h="2.5rem" alignItems="center" justifyContent="center" {...props}>{children}</Flex>)