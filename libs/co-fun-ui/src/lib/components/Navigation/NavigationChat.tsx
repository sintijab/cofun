import { Box, Flex } from "@chakra-ui/react";
import { AvatarIcon, BackIcon, CalendarIcon, Logo, TextBase, VerticalEllipsisIcon } from "../../foundations";
import { AttachmentIcon } from "../../foundations/Icons/AttachmentIcon";
import { Image } from '@chakra-ui/react';

export const NavigationChat = ({ author, image, title }: { author: string, image?: string, title: string }) => (
  <Flex p=".5rem 1.75rem .3rem" justifyContent="space-between" alignItems="center" flexWrap="wrap">
    <Flex alignItems="center">
      <BackIcon h="1.5rem"/>
      {!!image ? <Image src={image} h="2.3rem" w="2.3rem" borderRadius="50%" m="0 .5rem 0 2rem" /> : <AvatarIcon m="0 .5rem 0 2rem" w="2.3rem" h="2.3rem">{author.substring(0, 1)}</AvatarIcon>}
      <Box>
      {!!title && <Flex alignItems="center"><TextBase>{title}</TextBase></Flex>}
      {!!author && <TextBase fontSize="11pt">{author}</TextBase>}
      </Box>
    </Flex>
    <Flex flexBasis="0" justifyContent="flex-end">
      <AttachmentIcon h="1.5rem" />
      <CalendarIcon h="1.5rem" />
      <VerticalEllipsisIcon h="1.5rem" />
    </Flex>
  </Flex>
)