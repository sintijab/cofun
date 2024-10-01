import { Box, Flex, FlexProps} from "@chakra-ui/react";
import { BellIcon, BookmarkIcon, ButtonPrimary, EndorsementIcon, ShareIcon, TextBase } from "../../foundations";

export const Project = ({ title, description, isEndorsed, children, ...props }: {  title: string; description: string, isEndorsed: boolean } & FlexProps) => (
  <Box p="1.875rem 2.063rem" border="1px" borderColor="border.default" borderRadius="lg">
    <Box display="flex" pb="1.125rem">
      <Box>
        <Flex alignItems="center" pb="0.75rem">
          <TextBase textStyle="project-title">{title}</TextBase>
            <ButtonPrimary bg={isEndorsed ? "button.action" : 'transparent'} margin="0 0 0 2.25rem" p="0 .8rem 0 .6rem" variant="outline">
              <EndorsementIcon strokeColor={isEndorsed ? '#FFFFFF' : "#1DC64D"} width="1.rem" height="1.7rem"/>
              <TextBase textStyle="project-author" color={isEndorsed ? "primary.white" : "button.action"} pl=".4rem">{isEndorsed ? 'Endorsed' : 'Endorse'}</TextBase>
            </ButtonPrimary>
        </Flex>
        <TextBase textStyle="project-descr" mb="1rem">{description}</TextBase>
      </Box>
      <Flex direction="column" justifyContent="space-between" alignItems="flex-end" pl="1rem">
        <BellIcon />
        <Flex>
          <ShareIcon paddingRight="1rem" />
          <BookmarkIcon />
        </Flex>
      </Flex>
    </Box>
    {children}
  </Box>
)