import { Link as LinkBase } from '@chakra-ui/react';

export const Link = ({ label, href, isExternal, variant }: { label: string; href: string, isExternal?: boolean, variant: 'nav' }) => (
  <LinkBase href={href} isExternal={isExternal} variant={variant}>
    {label}
  </LinkBase>
)