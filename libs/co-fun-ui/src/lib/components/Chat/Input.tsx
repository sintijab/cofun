import { InputGroup, Input as InputBase, InputRightElement, Flex, Box, FlexProps } from "@chakra-ui/react"
import { MicrophoneIcon, TextBase } from "../../foundations"

export const Input = ({ suggestions, ...props }: { suggestions?: string[]} & FlexProps) => {
  return (
    <Box {...props}>
      {suggestions && <Flex justifyContent="flex-end">{suggestions.map((text) => <Box bg="chat.suggestions" p="0.75rem 1rem" borderRadius="1.25rem 1.25rem .5rem 1.25rem" m=".5rem .5rem .5rem 0" cursor="pointer"><TextBase textStyle="chat" color="primary.default">{text}</TextBase></Box>)}</Flex>}
      <InputGroup >
        <InputBase variant="unstyled" padding=".75rem" border="1px" borderColor="chat.authorBg" size="lg" placeholder='Message' focusBorderColor='chat.authorBg' borderRadius="2rem" _placeholder={{ color: 'chat.authorBg', fontFamily: '"Roboto", sans-serif;' }} _focus={{ border: '2px', borderColor: 'navigation.dark'}} />
        <InputRightElement padding="1.75rem" cursor="pointer">
          <MicrophoneIcon fill="chat.authorBg" />
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}