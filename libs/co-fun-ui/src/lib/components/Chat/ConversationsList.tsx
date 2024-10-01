import { Flex } from "@chakra-ui/react"
import { TextBase } from "../../foundations"
import { EditIcon } from "../../foundations/Icons/EditIcon";
import { ConvoListItem } from "./ConvoListItem";

export type IConversations = { author: string; image?: string; time: string; title: string; category: string; isActive?: boolean };
export type IConversationsList = { conversations: IConversations[]; discovery?: IConversations[] };

export const ConversationsList = ({ conversations, discovery }: IConversationsList) => (
    <Flex direction="column" w="20.3rem" bg="chat.defaultBgTransparent" pr="1rem" zIndex="1">
      <TextBase textStyle="initiative-labels" p="1.125rem 0 1.125rem 1rem">{'Conversations'}</TextBase>
      {conversations.map(convo => <ConvoListItem {...convo} />)}
      <Flex justifyContent="space-between" p="1.125rem 0 1.125rem 1rem" borderTop="1px" borderColor="chat.divider">
        <TextBase textStyle="initiative-labels">{'Discovery'}</TextBase>
        <Flex alignItems="center" justifyContent="center" h="2rem" w="2rem" textAlign="center" border="1px" borderColor="chat.borderIcon" borderRadius=".5rem" p="0.25rem 0.281rem"><EditIcon w="1.5rem" h="1.5rem"/></Flex>
      </Flex>
      {discovery?.map(convo => <ConvoListItem {...convo} />)}
    </Flex>
  )