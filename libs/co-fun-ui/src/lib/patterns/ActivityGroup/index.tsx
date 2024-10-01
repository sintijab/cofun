import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import { ArrowDownIcon, FilterIcon, GiftIcon, SupportIcon, TextBase } from "../../foundations";
import { Activity, IActivity } from "../../components/Activity";

export const ActivityGroup = ({ title, activity, ...props }: { title: string, activity: IActivity[] } & FlexProps) => (
  <Box border="1px" borderColor="border.default" borderRadius="lg" mt="2.188rem" p="0 1.5rem" {...props}>
    <Flex justifyContent="space-between" pb="1.4rem">
    <TextBase textStyle="heading">{title}</TextBase>
    <Box display="flex" alignItems="center">
      <TextBase pr="1rem" textStyle="activity-labels">{`Options`}</TextBase>
      <ArrowDownIcon mr="1rem"/>
      <TextBase pr=".5rem" textStyle="activity-labels">{`Filter by`}</TextBase>
      <FilterIcon />
    </Box>
    </Flex>
    <Flex flex="0 0 33%" gap="0.375rem" flexWrap="wrap" justifyContent="center">
    {!!activity && activity.map((({ title, description, supportersCount, endorsementCount, author, image }) => <Box width="30%"><Activity title={title} description={description} supportersCount={supportersCount} endorsementCount={endorsementCount} author={author} image={image} /></Box>))}
    </Flex>
  </Box>
)