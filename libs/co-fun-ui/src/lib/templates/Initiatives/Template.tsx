import { Box, Flex, FlexProps} from "@chakra-ui/react";
import { ButtonPrimary, TextBase, UserAddIcon } from "../../foundations";
import { Image } from '@chakra-ui/react';

export const InitiativeOverview = ({ title, description, author, isFollowing, profile, children, ...props }: { title: string; description: string; author: string, profile?: string, isFollowing: boolean | null;} & FlexProps) => (
  <Flex p="4rem" flexWrap="wrap" width="100%" {...props}>
    <Flex justifyContent="space-between" flexBasis="100%">
      <TextBase textStyle="project-title" pb="0.5rem">{title}</TextBase>
      {isFollowing !== null && <ButtonPrimary background="button.dark" ><UserAddIcon fill="white" width="1.3rem" height="1.3rem" mr=".2rem" p="0"/><TextBase textStyle="initiative-labels">{isFollowing ? 'Following' : 'Follow'}</TextBase></ButtonPrimary>}
    </Flex>
    <Flex alignItems="center" gap={2} pb="1.438rem" flexBasis="100%" pl=".1rem">
      {!!profile && <Image src={profile} alt="profile image" rounded="50%" width="2.5rem" height="2.5rem" />}
      <TextBase textStyle="project-author" mr="1.875rem">{author}</TextBase>
    </Flex>
    <TextBase textStyle="initiative-descr" mb="2.188rem" flexBasis="100%">{description}</TextBase>
    {children}
  </Flex>
)