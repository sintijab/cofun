import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Box } from "@chakra-ui/react"
import { ButtonPrimary } from "../../foundations"

export const ModalBase = ({ content, title, button, buttonText }: { content: React.ReactNode, title: string, button?: React.ReactNode, buttonText?: string}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {button ? <Box onClick={onOpen}>{button}</Box> : <ButtonPrimary variant="outline_dark" onClick={onOpen}>{buttonText}</ButtonPrimary>}

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
        <ModalOverlay bg='whiteAlpha.500' backdropFilter='blur(1px) hue-rotate(0)' />
        <ModalContent borderRadius="1rem" p="2rem 1.5rem">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton size='lg' m="1rem 1rem" color="border.dark"/>
          <ModalBody>
            {content}
          </ModalBody>
          <ModalFooter>
            <ButtonPrimary variant="outline_dark" border="1px" onClick={onClose}>Close</ButtonPrimary>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
