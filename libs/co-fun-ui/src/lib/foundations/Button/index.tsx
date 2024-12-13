import { Button, LinkProps, ButtonProps } from "@chakra-ui/react";

export const ButtonPrimary = ({ children, variant = 'primary', ...props }: { variant?: 'primary' | 'outline' | 'outline_dark' | 'transparent' | 'list'} & LinkProps & ButtonProps ) => <Button _hover={{ ...(variant === "list" && { textDecoration: 'underline' }), boxShadow: `inset 0 0 0 150px rgba(0, 0, 0, ${variant === "list" ? "0.04" : "0.1"});` }} variant={variant} {...props}>{children}</Button>