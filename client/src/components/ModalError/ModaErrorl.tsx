import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/actions/public/modalActions";
import { Modal, Overlay, ModalContent, Flex } from "./styles";

const ModalError = () => {
  const { title, message } = useSelector(
    (state: any) => state.modalReducer.modal
  );

  const dispatch = useDispatch();

  const close = () => {
    dispatch(
      setModal({
        title: "",
        message: "",
        open: false,
      })
    );
  };

  return (
    <Modal>
      <Overlay></Overlay>
      <ModalContent>
        <h2>{title}</h2>
        <p>{message}</p>
        <Flex>
          <button onClick={close}>Cerrar</button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalError;
