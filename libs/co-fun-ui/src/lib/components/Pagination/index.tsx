// import { ArrowLeftIcon, ArrowRightIcon } from "../../foundations"

import { Flex, FlexProps, Link } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon, TextBase } from "../../foundations";

export const Pagination = ({ nrOfPages = 10, activePage = 1, ...props}: { nrOfPages?: number, activePage?: number } & FlexProps) => {
  const list = [...Array(nrOfPages).keys()];
  list.shift();
  return (
    <Flex alignItems="center" {...props}>
      <Link display="flex" alignItems="center">
       <ArrowLeftIcon mr="0.5rem" />
       <TextBase pr="0.75rem">{'Previous'}</TextBase>
      </Link>
        {list.map((number, i) => {
          const isFirst = number <= 3;
          const isLast = number > list.length - 1 - 2;
          return (
            <>
              {isFirst && <Link p="0.5rem 0.75rem" textDecoration={number === activePage ? 'underline' : 'none'}>{number}</Link>}
              {(isFirst || isLast) && i === 2 && <TextBase p="0.5rem 0.75rem">{'...'}</TextBase>}
              {isLast && <Link p="0.5rem 0.75rem" textDecoration={number === activePage ? 'underline' : 'none'}>{number}</Link>}
            </>
          )
        })}
      <Link display="flex" alignItems="center">
        <TextBase pl="0.75rem">{'Next'}</TextBase>
        <ArrowRightIcon ml="0.5rem" />
      </Link>
    </Flex>
    )
}