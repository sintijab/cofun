import { Box, Flex, FlexProps} from "@chakra-ui/react";
import { ButtonPrimary, TextBase, UserAddIcon } from "../../foundations";
import { Image } from '@chakra-ui/react';

export const InitiativeOverview = ({ title, description, author,isFollowing, backersAmount, profile, children, ...props }: { blockquote: string; title: string; description: string; backersAmount: string, author: string, profile: string, isFollowing: boolean } & FlexProps) => (
  <Box p="4rem">
    <Flex justifyContent="space-between">
      <TextBase textStyle="project-title" pb="0.5rem">{title}</TextBase>
      <ButtonPrimary background="button.dark" ><UserAddIcon fill="white" width="1.3rem" height="1.3rem" mr=".2rem" p="0"/><TextBase textStyle="initiative-labels">{isFollowing ? 'Following' : 'Follow'}</TextBase></ButtonPrimary>
    </Flex>
    <Flex alignItems="center" gap={2} pb="1.438rem">
      <Image src={profile} alt="profile image" rounded="50%" width="2.5rem" height="2.5rem" />
      <TextBase textStyle="project-author" mr="1.875rem">{author}</TextBase>
      <TextBase textStyle="project-author" color="primary.default">{`Backers: ${backersAmount}`}</TextBase>
    </Flex>
    <TextBase textStyle="initiative-descr" mb="2.188rem">{description}</TextBase>
    {children}
  </Box>
)