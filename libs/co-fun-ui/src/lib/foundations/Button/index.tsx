import { Button, LinkProps, ButtonProps } from "@chakra-ui/react";

export const ButtonPrimary = ({ children, variant = 'primary', ...props }: { variant?: 'primary' | 'outline' | 'transparent'} & LinkProps & ButtonProps ) => <Button variant={variant} {...props}>{children}</Button>