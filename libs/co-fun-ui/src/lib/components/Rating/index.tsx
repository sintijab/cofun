import { Box, Flex } from "@chakra-ui/react";
import { StarIcon, StarIconFilled } from "../../foundations";
import { useState } from "react";

export const Rating = ({ nrOfStars = 5 }: { nrOfStars?: number; }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const rating = [...Array(nrOfStars).keys()];
  
  return (
  <Flex pr="0.75rem" m="0.25rem">{rating.map((_, i) => <Box onMouseEnter={() => setActiveIndex(i)} pr="0.75rem">{activeIndex === null || activeIndex < i ? <StarIcon w="1.5rem" h="1.5rem" cursor="pointer" fill="rating.outline" /> : <StarIconFilled w="1.5rem" h="1.5rem" cursor="pointer" fill="rating.filled"/>}</Box>)}</Flex>
)}
