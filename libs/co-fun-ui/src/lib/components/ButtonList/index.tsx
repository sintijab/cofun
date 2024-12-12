import { Box, Flex, List, ListItem } from "@chakra-ui/react"
import { ButtonPrimary, TextBase } from "../../foundations"
import { ModalBase } from "../Modal";

export const ButtonList = ({ title, description, answers, showInfo = true, onClick }: { title: string; description?: string | string[]; showInfo?: boolean, answers: { answer: string; key: string }[],  onClick: (key: string) => void }) => {
  const info = <Flex cursor="pointer" border="1px" h="1.5rem" w="1.5rem" ml=".5rem" borderRadius="1rem" justifyContent="center" alignContent="center" flexWrap="wrap" _hover={{ boxShadow: "inset 0 0 0 150px rgba(0, 0, 0, 0.05)"}}><TextBase textStyle="button-select-info">{`?`}</TextBase></Flex>
  const modalContent = typeof description !== 'string' ? description!.map((descr: string, i: number) => <TextBase key={`option-${i}`} textStyle="button-select-descr" p=".4rem 0">{descr}</TextBase>) : description;
  return (
    <>
      <Flex alignItems="center" mb="1rem">
        <TextBase textStyle="button-select-title">{title}</TextBase>
        {showInfo && <ModalBase content={<Flex textStyle="button-select" mb="1rem" flexDirection="column">{modalContent}</Flex>} title={title} button={info} />}
      </Flex>
      {description && typeof description === 'string' && !showInfo && <TextBase textStyle="button-select" mb="1rem">{description}</TextBase>}
      {description && typeof description !== 'string' && !showInfo && <Flex textStyle="button-select" mb="1rem" flexDirection="column">{modalContent}</Flex>}

      <List spacing={1}>{answers.map((a, i) => {
        const parts = a.answer.split(':');
        if (parts.length > 1) {
          return <ListItem key={`button-list-${i}`}><ButtonPrimary variant="list" mb="2px" onClick={() => onClick(a.key)} flexDirection="column" lineHeight="1.5" alignItems="baseline" height="max-content">{parts[0]}<TextBase textStyle="button-select-descr">{parts[1]}</TextBase></ButtonPrimary></ListItem>
        }
        return <ListItem key={`button-list-${i}`}><ButtonPrimary variant="list" mb="2px" onClick={() => onClick(a.key)}>{a.answer}</ButtonPrimary></ListItem>
      })}
      </List>
    </>
  )
}