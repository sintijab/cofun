import { Link as LinkBase, TextProps } from '@chakra-ui/react';

export const Link = ({ href, isExternal, variant, textDecoration, children, ...rest }: { children: React.ReactElement | string, href: string, isExternal?: boolean, textDecoration?: 'underline' | 'none', variant: 'nav' | 'card' | 'poster' | 'action' | 'link' } & TextProps) => {
  const { padding, position, textAlign } = rest;
  return (
  <LinkBase href={href} isExternal={isExternal} variant={variant} p={padding} position={position} textAlign={textAlign} textDecoration={textDecoration}>
    {children}
  </LinkBase>
)}