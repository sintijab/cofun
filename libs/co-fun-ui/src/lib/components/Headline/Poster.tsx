import { Flex, Heading } from "@chakra-ui/react"
import { Link, Logo, TextBase } from "../../foundations"

export const Poster = ({ headline, description, button }: { headline: string, description: string, button: string }) => (
  <Flex h="100vH" width="100%" flexWrap="wrap" alignItems="center" justifyContent="center" backgroundSize="cover" backgroundPosition="center" backgroundImage="./zermatt_cover.webp">
    <Flex width="100%" flexWrap="wrap" alignItems="center" flexDirection="column">
      <Flex alignItems="center"><Logo /> <Heading variant="headline" as="h1" textAlign="center" size="lg" pl=".7rem">{headline}</Heading></Flex>
      <TextBase textStyle="poster-descr" textAlign="center" pb="1.5rem">{description}</TextBase>
      <Link variant="poster" isExternal={false} href="/#pricing" textStyle="poster-btn">{button}</Link>
    </Flex>
  </Flex>
)