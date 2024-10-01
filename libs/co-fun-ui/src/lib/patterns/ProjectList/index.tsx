import { Box, Flex, FlexProps, Grid, GridItem } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import { BellIcon, TextBase } from "../../foundations";
import { ChatIcon, SupportIcon } from "../../foundations";


export type IProject = { title: string; categories: string; location: string; image: string; price: string; summary: string, backers: string, chat: string, notifications: string }

export const ProjectList = ({ projects, ...props }: { projects: IProject[] } & FlexProps) => (
  <Flex direction="column" gap={4} width="100%" flexGrow="100%" {...props}>
    {projects?.map(project => (
        <Flex justifyContent="space-between" borderBottom="1px" borderColor="secondary.lightGrey">
          <Flex pb="0.75rem">
            <Image width="6rem" height="5.75rem" mr="1rem" src={project.image} />
            <Box>
              <Flex alignItems="center">
                <TextBase textStyle='project-list-title' mr="1rem">{project.title}</TextBase>
                <SupportIcon height="1.6rem" />
                <TextBase textStyle='project-list-descr'>{project.backers}</TextBase>
              </Flex>
              <TextBase textStyle='project-list-descr'>{`${project.categories} • ${project.price} ${project.location}`}</TextBase>
              <TextBase textStyle='project-list-descr'>{project.summary}</TextBase>
            </Box>
          </Flex>
          <Flex>
            <BellIcon mr="1rem" height="2rem" />
            {/* <ChatIcon mr="1rem" height="2rem" /> */}
          </Flex>
        </Flex>
    ))}
  </Flex>
)