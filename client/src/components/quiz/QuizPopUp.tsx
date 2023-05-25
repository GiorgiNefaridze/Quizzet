import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { LOSE, GO_BACK } from "../../CONSTANTS";

const QuizPopUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <>
      <Modal
        colorScheme="red"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{LOSE}</ModalHeader>
          <ModalFooter>
            <Button
              onClick={handleClick}
              colorScheme="red"
              mr={3}
              width={100}
              paddingInline={20}
            >
              {GO_BACK}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default QuizPopUp;
