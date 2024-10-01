import { Flex } from "@chakra-ui/react";
import { ButtonPrimary } from "../../foundations";
import { Image } from '@chakra-ui/react';

export const HeroMinimal = ({ heading, subheading, link, image }: { heading?: React.ReactElement, subheading?: React.ReactElement, link?: { label: string; href: string }, image?: string }) => (
  <Flex justifyContent='center' alignItems='center' direction='column' overflow='hidden' position='relative' h='calc(100vH - 15rem)'>
    {!!image && <Image src={image} alt='article cover image' position='absolute' top='0' zIndex='-1' minWidth="100%" minHeight="100%" objectFit="cover" />}
    {heading}
    {subheading}
    {!!link && <ButtonPrimary size='lg' as={'Link' as 'link'} href={link.href}>{link.label}</ButtonPrimary>}
  </Flex>
)
