import { Grid, GridItem, FlexProps } from "@chakra-ui/react";
import { TextBase } from "../../foundations";
import { Image } from '@chakra-ui/react';

export const SectionLayout = ({ blockquote, title, description, image, children, ...props }: { blockquote: string; title: string; description: string; image?: string } & FlexProps) => (
  <Grid templateColumns='repeat(16, 1fr)' position='relative' overflow='hidden' pt='3.44rem' {...props}>
    {!!image && <Image src={image} alt='section background image with amber and rocks washed out of sea' position='absolute' top='0' zIndex='-1' />}
    <GridItem colStart={3} colEnd={15} rowStart={1} rowEnd={2}>
      <TextBase textStyle='label-medium' m='1.44rem 0' textAlign='center'>{blockquote}</TextBase>
    </GridItem>
    <GridItem colStart={3} colEnd={15} rowStart={2} rowEnd={3} mt='1.44rem'>
      <TextBase textStyle='heading' mb='0.5rem'>{title}</TextBase>
    </GridItem>
    <GridItem colStart={3} colEnd={15} rowStart={3} rowEnd={4}>
      <TextBase textStyle='subheading' color='secondary.default ' mb='.8rem'>{description}</TextBase>
    </GridItem>
    <GridItem colStart={4} colEnd={14} rowStart={4} rowEnd={5}>
      {children}
    </GridItem>
  </Grid>
)