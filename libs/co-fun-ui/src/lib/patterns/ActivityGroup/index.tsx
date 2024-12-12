import { Box, Flex, FlexProps, Link } from "@chakra-ui/react";
import { ArrowDownIcon, FilterIcon, TextBase } from "../../foundations";
import { Activity, IActivity } from "../../components/Activity";

export const ActivityGroup = ({ title, activity, href, hasFilter = true, ...props }: { title?: string, activity: IActivity[], hasFilter?: boolean, href?: string } & FlexProps) => (
  <Box border="1px" borderColor="border.default" borderRadius="lg" mt={["0", "2.188rem"]} p={["0", "0 1.5rem"]} {...props}>
    <Flex justifyContent={props.justifyContent || "space-aound"} pb={["0", "1.4rem"]} >
    {title && <TextBase textStyle="heading">{title}</TextBase>}
    {hasFilter && <Box display="flex" alignItems="center">
      <TextBase pr="1rem" textStyle="activity-labels">{`Options`}</TextBase>
      <ArrowDownIcon mr="1rem"/>
      <TextBase pr=".5rem" textStyle="activity-labels">{`Filter by`}</TextBase>
      <FilterIcon />
    </Box>}
    </Flex>
    <Flex flex="0 0 33%" gap="0.375rem" flexWrap="wrap" justifyContent="center">
    {!!activity && activity.map((({ title, description, supportersCount, endorsementCount, author, image, href }, i) => <Box width={["100%", "30%"]} key={i + '-activity'}><Link href={href} isExternal={true} display="inline-flex" height="100%"><Activity color="primary.grey" textAlign="center" title={title} description={description} supportersCount={supportersCount} endorsementCount={endorsementCount} author={author} image={image} /></Link></Box>))}
    </Flex>
  </Box>
)