import { Box, Flex, FlexProps, Image } from "@chakra-ui/react";

import { ConversationsList, Input, Messages, NavigationChat, NavigationSide } from "../components";
import { IConversationsList } from "../components/Chat/ConversationsList";
import { IMessages } from "../components/Chat/Messages";
import { INavigationBase } from "../components/Navigation/NavigationSide";
import { useEffect, useRef } from "react";


export const AIAssistantChat = ({ conversations, discovery, author, image, history, title, links, suggestions = [], onSubmit, onClickSuggestion, children }: IConversationsList & IMessages & { links?: INavigationBase[] } & { suggestions?: { answer: string }[]} & { onSubmit: (data: string) => void; onClickSuggestion?: (i: number) => void } & FlexProps) => {
  return ( 
  <>
    <Box width="100%" bg="primary.white" position="fixed" zIndex="10">
      <NavigationChat author={author} image={image!} title={title} />
    </Box>

    <Flex pt="3rem" h="100%">
    <Flex position="fixed" h="100%" zIndex="1">
      <NavigationSide {...(links && { links })} />
      <ConversationsList conversations={conversations} discovery={discovery} />
    </Flex>
    <Image src="./waves.gif" width="25rem" height="100vH" position="fixed" top="0" zIndex="0"/>
    <Flex ml="25rem" position="fixed" overflowY="auto" top="0" bottom={suggestions?.length ? '5.5rem' : '3.5rem'} right="0" left="0" mb="3.5rem" mt="3.5rem">
    <Messages author={author} image={image} history={history} title={title}>
      {children}
      <Input onClickSuggestion={onClickSuggestion} suggestions={suggestions} m="0 1.5rem" position="fixed" left="24.8rem" right="0" bottom=".1rem" onSubmit={(data) => onSubmit(data as string)}/>
    </Messages>
    </Flex>
  </Flex>
  </>
)}