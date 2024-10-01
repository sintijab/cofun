import { AspectRatio, Box, Flex, FlexProps, Image} from "@chakra-ui/react";
import { ConversationsList, Input, Messages, NavigationChat, NavigationSide } from "../components";
import { IConversationsList } from "../components/Chat/ConversationsList";
import { IMessages } from "../components/Chat/Messages";
import { INavigationBase } from "../components/Navigation/NavigationSide";

export const AIAssistantChat = ({ conversations, discovery, author, image, history, title, links, suggestions }: IConversationsList & IMessages & { links: INavigationBase[] } & { suggestions?: string[]} & FlexProps) => (
  <>
    <Box width="100%" bg="primary.white" position="fixed" zIndex="10">
      <NavigationChat author={author} image={image!} title={title} />
    </Box>

    <Flex pt="3rem">
    <NavigationSide links={links} />
    <ConversationsList conversations={conversations} discovery={discovery} />
    <Image src="./waves.gif" width="25rem" height="100vH" position="fixed" top="0" zIndex="0"/>

    <Messages author={author} image={image} history={history} title={title}>
      <Input suggestions={suggestions} m="0 1.5rem"/>
    </Messages>
  </Flex>
  </>
)