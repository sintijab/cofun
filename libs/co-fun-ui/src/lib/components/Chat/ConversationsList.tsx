import { Flex } from "@chakra-ui/react"
import { TextBase } from "../../foundations"
import { EditIcon } from "../../foundations/Icons/EditIcon";
import { ConvoListItem } from "./ConvoListItem";

export type IConversations = { author?: string; image?: string | React.ReactNode; time: string; title: string; category: string; isActive?: boolean };
export type IConversationsList = { conversations: IConversations[]; discovery?: IConversations[] };

export const ConversationsList = ({ conversations, discovery }: IConversationsList) => (
    <Flex direction="column" w="20rem" bg="chat.defaultBgTransparent" pr="1rem" zIndex="1">
      <TextBase textStyle="initiative-labels" p="1.125rem 0 1.125rem 1rem">{'Conversations'}</TextBase>
      {conversations.map((convo, i) => <ConvoListItem key={i +`-chat`} {...convo} />)}
      <Flex justifyContent="space-between" p="1.125rem 0 1.125rem 1rem" borderTop="1px" borderColor="chat.divider">
        <TextBase textStyle="initiative-labels">{'Discovery'}</TextBase>
        <Flex alignItems="center" justifyContent="center" h="2rem" w="2rem" textAlign="center" border="1px" borderColor="chat.borderIcon" borderRadius=".5rem" p="0.25rem 0.281rem" _hover={{ boxShadow: "inset 0 0 0 150px rgba(0, 0, 0, 0.04)"}} cursor="pointer"><EditIcon w="1.5rem" h="1.5rem"/></Flex>
      </Flex>
      {discovery?.map(convo => <ConvoListItem {...convo} />)}
    </Flex>
  )