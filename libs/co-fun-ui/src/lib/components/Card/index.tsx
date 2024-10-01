import { Flex, Box, FlexProps } from "@chakra-ui/react";
import { TextBase } from "../../foundations";

export type CardProps = { category?: string; title?: string; description: string }

export const Card = ({ category, title, description, ...props }: CardProps & FlexProps) => (
  <Flex direction='column' justifyContent='space-between' p='1.5rem 1.8rem' boxShadow='1px 4px 4px -2px rgba(227, 227, 227, 0.75)' bg='primary.white' borderRadius='2xl' maxWidth='21.87rem' {...props}>
    <Box mb={category && title ? '1.5rem' : '.5rem'}>
      {!!category && <TextBase color={!!title ? 'primary.green' : 'primary.default'} textStyle='label-medium'>{category}</TextBase>}
      {!!title && <TextBase color='primary.green' textStyle='label-bold'>{title}</TextBase>}
    </Box>
    <TextBase fontSize='12pt' lineHeight='140%' color='primary.grey'>{description}</TextBase>
  </Flex>
)