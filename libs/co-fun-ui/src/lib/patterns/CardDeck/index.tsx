import { Box, FlexProps } from "@chakra-ui/react";
import { Card } from "../../components";
import { CardProps } from "../../components/Card";

export const CardDeck = ({ cards, ...props }: { cards: CardProps[] } & FlexProps) => (
  <Box display="flex" justifyContent='space-between' alignItems='stretch' flexWrap='wrap'>
      {cards.map(({ category, title, description}) => (<Card category={category} title={title} description={description} m='0.719rem 0' {...props}/>))}
  </Box>
)