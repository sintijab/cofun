import { Box, IconButton } from "@chakra-ui/react";
import { Link } from "../../foundations/Link";
import { SearchIcon } from "../../foundations/Icons/SearchIcon";
import { ButtonPrimary, Logo } from "../../foundations";

export const NavigationTop = ({ links }: { links: { label: string; href: string }[] }) => (
  <Box display="flex" justifyContent='space-between' alignItems='center' p='1.5rem 1.8rem' boxShadow='0 3px 2px -2px rgba(32, 33, 36, 0.1)'>
    <Box pl='.7rem' display="inline-block">
      <Logo />
    </Box>
    <Box display="flex" alignItems='center'>
      {links.map((item) => (
          <Link label={item.label} href={item.href} variant='nav'/>
      ))}
      <Box pl='.7rem' display="inline-block">
        <IconButton aria-label='Search pages' size='sm' colorScheme='transparent' icon={<SearchIcon />} />
      </Box>
      <Box pl='1.5rem' display="inline-block">
        <ButtonPrimary size='sm'>{'Sign In'}</ButtonPrimary>
      </Box>
    </Box>
  </Box>
)