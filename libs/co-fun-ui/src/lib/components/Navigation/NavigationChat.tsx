import { Box, Flex } from "@chakra-ui/react";
import { AvatarIcon, BackIcon, Logo, TextBase } from "../../foundations";
import { Image } from '@chakra-ui/react';

export const NavigationChat = ({ author, image, title, showBackIcon }: { author?: string, image?: string | React.ReactNode, title?: string, showBackIcon?: boolean}) => (
  <Flex p={showBackIcon ? ".5rem 1.75rem .3rem" : [".5rem", "1rem"]} justifyContent={showBackIcon? "space-between" : "center"} alignItems="center" flexWrap="wrap">
    <Flex alignItems="center">
      {showBackIcon && <BackIcon h="1.5rem" cursor="pointer" />}
      {!showBackIcon && <a href="./"><Logo flexBasis="100%" /></a>}
      {!!image && typeof image !== 'string' && image}
      {!!image && typeof image === 'string' && <Image src={image} h="2.3rem" w="2.3rem" borderRadius="50%" m="0 .5rem 0 2rem" />}
      {!image && !!author && <AvatarIcon m="0 .5rem 0 2rem" w="2.3rem" h="2.3rem">{author.substring(0, 1)}</AvatarIcon>}
      <Box>
      {!!title && <Flex alignItems="center"><TextBase>{title}</TextBase></Flex>}
      {!!author && <TextBase fontSize="11pt">{author}</TextBase>}
      </Box>
    </Flex>
  </Flex>
)