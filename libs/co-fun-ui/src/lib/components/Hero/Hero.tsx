import { Grid, GridItem } from "@chakra-ui/react";
import { ButtonPrimary } from "../../foundations";
import { Image } from '@chakra-ui/react';

export const Hero = ({ heading, subheading, link, image }: { heading?: React.ReactElement, subheading?: React.ReactElement, link?: { label: string; href: string }, image?: string }) => (
  <Grid templateColumns='repeat(8, 1fr)' templateRows='repeat(5, 1fr)' gap={8} position='relative' h='calc(100vH - 7rem)' overflow='hidden' >
    {!!image && <Image src={image} alt='treetop walk in Rugen' opacity='80%' position='absolute' top='0' zIndex='-1' minWidth="100%" minHeight="100%" objectFit="cover" />}
    {!!heading && <GridItem colStart={3} colEnd={8} rowStart={2} rowEnd={3}>{heading}</GridItem>}
    {!!subheading && <GridItem colStart={4} colEnd={8} rowStart={3} rowEnd={4}>{subheading}</GridItem>}
    {!!link && <GridItem colStart={4} colEnd={6} rowStart={4} rowEnd={5} alignSelf='end'><ButtonPrimary size='lg' as={'Link' as 'link'} href={link.href}>{link.label}</ButtonPrimary></GridItem>}
  </Grid>
)
