import { Box, Flex } from "@chakra-ui/react";
import { ButtonPrimary, PinContainerIcon, ShareIcon, TextBase, ToggleOnIcon, UserAddIcon, UserPlusIcon } from "../../foundations";
import { Image } from '@chakra-ui/react';

export type IHeroProps = { title: string, summary: string, author: string, profile: string, image: string, hasNotifications: boolean };
export const HeroPersonal = ({ title, summary, author, profile, image }: IHeroProps) => (
  <Flex direction="column" justifyContent="flex-end" bgImage={image} p="0 0 0 1.5rem" h="14rem" borderRadius="1.75rem">
    <Box background="background.green" borderRadius="0.25rem" width="max-content" p="0 .1rem" mb="1rem">
      <TextBase textStyle="project-title" color="primary.white" mb="-.3rem">{title}</TextBase>
    </Box>
    <Box background="background.grey" borderRadius="0.25rem" width="max-content" p="0 .1rem" mb="1rem">
      <TextBase textStyle="initiative-labels" color="primary.white">{summary}</TextBase>
    </Box>
    <Flex>
      <Image height="1.5rem" width="1.5rem" src={profile} alt='profile image' position="absolute" borderRadius="50%" />
      <PinContainerIcon zIndex="1"/>
      <Box background="background.grey" borderRadius="0.25rem" height="max-content" width="max-content" p="0 .3rem 0 1.5rem" m='.2rem 4rem 0 -1rem'>
        <TextBase textStyle="initiative-labels" color="primary.white" fontWeight="medium" fontFamily="Jost">{author}</TextBase>
      </Box>
      <Flex>
        <ButtonPrimary mr=".5rem" variant="transparent" p="0.2rem" maxHeight="fit-content" boxShadow='0 1px 2px 0 rgba(0, 0, 0, 0.80)' ><ToggleOnIcon height="1.1rem" m="0 .2rem 0 0"/><TextBase textStyle="initiative-labels" color="primary.dark" fontWeight="medium" fontFamily="Jost">{'Notifications'}</TextBase></ButtonPrimary>
        <ButtonPrimary variant="transparent" p="0.2rem 0.35rem" mr=".5rem" maxHeight="fit-content" boxShadow='0 1px 2px 0 rgba(0, 0, 0, 0.80)'><UserPlusIcon height="1.1rem" width="1rem" m="0 .2rem 0 0"/><TextBase textStyle="initiative-labels" color="primary.dark" fontWeight="medium" fontFamily="Jost">{'Invite a friend'}</TextBase></ButtonPrimary>
        <ShareIcon fill="primary.white" height="1.5rem" />
      </Flex>
    </Flex>
  </Flex>
)
