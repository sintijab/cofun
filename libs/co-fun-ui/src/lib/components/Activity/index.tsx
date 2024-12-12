import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import { GiftIcon, SupportIcon, TextBase } from "../../foundations";

export type IActivity = { title: string; description: string; image?: string, supportersCount?: string, endorsementCount?: string, author?: string; href?: string };

export const Activity = ({ title, description, image, author, supportersCount, endorsementCount, ...props }: IActivity & FlexProps) => (
  <Flex border="1px" borderColor="border.default" borderRadius="lg" p="1.063rem 1.5rem" direction="column" justifyContent="space-between" {...props}>
    <Box>
    {!!image && <Box borderRadius="lg" overflow="hidden" position="relative" height="18.563rem"><TextBase position="absolute" color={props.color || "primary.lightGrey"} bottom="0.719rem" textStyle='activity-title' zIndex="1" cursor="pointer">{title}</TextBase><Box position="absolute" height="100%" width="100%" background="linear-gradient(#ffffff00, rgb(255 255 255 / 24%))" cursor="pointer"/><Image src={image} minWidth="100%" minHeight="100%" objectFit="cover" /></Box>}
    <Box m="0.625rem 0" maxHeight='7.688rem' overflow='hidden'>
      {!!author && <TextBase fontWeight="semibold" pr="0.2rem" display="inline" >{author}</TextBase>}
      <TextBase display="inline" textStyle="activity-descr" cursor="pointer">{description}</TextBase>
    </Box>
    </Box>
    {!!supportersCount && endorsementCount && <Box p="0.625rem 0 0" display="flex" alignItems="center">
      <SupportIcon cursor="pointer" />
      {!!supportersCount && <TextBase m="0 1rem 0 0.2rem">{supportersCount}</TextBase>}
      <GiftIcon cursor="pointer" />
      {!!endorsementCount && <TextBase m="0 1rem 0 0.2rem">{endorsementCount}</TextBase>}
    </Box>
    }
  </Flex>
)