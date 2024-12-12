import { Box, Flex } from "@chakra-ui/react"
import { TextBase } from "../../foundations"
import { AvatarIcon } from "../../foundations/Avatar";
import { Image } from '@chakra-ui/react';

import { IConversations } from "./ConversationsList";

export const ConvoListItem = (convo: IConversations) => {
    const truncate = (text: string, maxLength: number): string => text.length > maxLength ? text.substring(0, maxLength - 3) + '...' : text;
    return (
    <Flex p="1.125rem 1rem 1.125rem 1rem" alignItems="center" bg={convo.isActive ? "chat.convoBg" : "transparent"} justifyContent="space-between">
      <Flex>
        {convo?.image && typeof convo.image === 'string' ? <Image src={convo.image} h="2.5rem" borderRadius="50%" mr="1rem" /> : convo?.image && typeof convo.image !== 'string' ? convo.image : convo.author ? <AvatarIcon mr="1rem">{convo.author.substring(0, 1)}</AvatarIcon> : <></>}
        <Box mr="1rem">
          <TextBase textStyle="chat">{truncate(`${convo.author ? convo.author + ': ' : ''}${convo.title}`, 24)}</TextBase>
          <TextBase letterSpacing="0.025em" fontSize="10.5pt">{convo.category}</TextBase>
        </Box>
      </Flex>
      <TextBase textStyle="chat-time">{convo.time}</TextBase>
    </Flex>
  )}
  