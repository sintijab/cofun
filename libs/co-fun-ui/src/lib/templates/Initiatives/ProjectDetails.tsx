import { Box, Flex, FlexProps} from "@chakra-ui/react";
import { HeroPersonal, Pagination } from "../../components";
import { IHeroProps } from "../../components/Hero/HeroPersonal";
import { IProject, ProjectList } from "../../patterns/ProjectList";
import { ButtonPrimary, FilterFollowingIcon, FilterIcon, SearchThinIcon, TextBase } from "../../foundations";

export const ProjectDetails = ({ hero, projects }: { hero: IHeroProps; projects: IProject[] } & FlexProps) => (
  <Box>
    <HeroPersonal {...hero} />
    <Flex alignItems="center" justifyContent="space-between" m="1.313rem 0">
      <TextBase textStyle='project-list-title' ml=".2rem">{`All Projects`}</TextBase>
      <Box>
      <SearchThinIcon mr="2rem"/>
      <ButtonPrimary mr="2rem" variant="transparent" p="0.3rem 0.5rem" maxHeight="fit-content" border="1px"borderRadius=".5rem"><FilterIcon height="1.5rem" m="0 .2rem 0 0"/><TextBase  textStyle="initiative-labels" fontSize='10pt' color="primary.dark" fontWeight="500">{'Relevance'}</TextBase></ButtonPrimary>
      <FilterFollowingIcon mr=".5rem"/>
      </Box>
    </Flex>
    <ProjectList projects={projects}  mb="5rem"/>
    <Pagination justifyContent="center" />
  </Box>
)