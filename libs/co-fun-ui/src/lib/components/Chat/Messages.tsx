import { Box, Flex, FlexProps, Icon } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import { AvatarIcon, TextBase } from "../../foundations";
import { useEffect, useRef } from "react";

type IMessage = { response: string; widget?: any; author?: string }
export type IMessages = { author: string; image?: string | React.ReactNode; history?: IMessage[]; title: string; children: any; } & FlexProps;

export const Messages = ({ author, image, history, children, ...props }: IMessages) => {
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "instant", block: "start" });
    }
  });
  const lastElement = history ? history?.length - 1 : 0;

  return (
  <Flex direction="column" flex="1" mb="3.5rem" {...props}>
    <Box flex="1 1 auto;"  />
    {!!history && history?.map((msg, i) => {
      const isResponder = author === msg.author || msg.author === undefined;
      return (
      <Flex key={`msg-${i}`} ref={i === lastElement ? messageRef : null} p="0.5rem" alignSelf={!isResponder ? 'flex-end' : 'flex-start'} maxWidth="70%">
        <Box>
          <Flex>
          {image && typeof image === 'string' && isResponder ? <Image alignSelf="flex-start" mt=".5rem" lineHeight="2rem" src={image} h="2rem" w="2rem" borderRadius="50%" mr="1rem" /> : image && typeof image === 'object' && isResponder ? <Box mt=".5rem">{image}</Box> : isResponder ? <AvatarIcon mt=".5rem" alignSelf="flex-start" mr="1rem" w="2rem" h="2rem">{author.substring(0, 1)}</AvatarIcon> : null}
          {(!!msg?.response || !!msg?.widget) && <Box bg={isResponder ? "chat.messageBg" : "chat.authorBg"} p="0.75rem 1rem" borderRadius={isResponder ? "1.25rem 1.25rem 1.25rem .5rem" : "1.25rem 1.25rem .5rem 1.25rem" }><TextBase textStyle="chat" pr="1rem" color={isResponder ? "primary.default": "primary.white"}>{msg?.response || msg?.widget}</TextBase></Box>}
          </Flex>
          {!!msg?.widget && !!msg.response && <Box m="0.5rem 0" pl="3rem"><TextBase textStyle="chat" pr="1rem" color={isResponder ? "primary.defualt": "primary.white"}>{msg?.widget}</TextBase></Box>}
        </Box>
      </Flex>
    )})}
    {children}
  </Flex>
)}