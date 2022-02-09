import { FC } from "react";
import { useDispatch } from "react-redux";
import {
  convertToadminRole,
  createCategory,
  createNew,
  deleteUser,
} from "../../redux/actions/private/adminActions";

import { Modal, Overlay, ModalContent, Flex, TableButton } from "./styles";

interface modal {
  open: boolean;
  type: string;
}
type Props = {
  title: string;
  properties: string[];
  modal: {
    open: boolean;
    type: string;
  };
  setModal?: React.Dispatch<React.SetStateAction<modal>>;
  user?: {
    id?: number;
    email?: string;
    password?: string;
    role?: string;
    createdAt?: string;
    updatedAt?: string;
  };
  setUser?: React.Dispatch<React.SetStateAction<object>>;
};

const ModalAdmin: FC<Props> = ({
  title,
  properties,
  modal,
  setModal,
  user,
  setUser,
}) => {
  const dispatch = useDispatch();

  const guardar = (e: any) => {
    e.preventDefault();
    let objeto: any = {};
    properties.map((prop: string) => {
      objeto[prop] = e.target[prop].value;
    });

    console.log(objeto);

    if (title === "Categorías") dispatch(createCategory(objeto));
    if (title === "News") dispatch(createNew(objeto));
    if (setModal) {
      setModal({
        open: false,
        type: "",
      });
    }
  };

  const eliminar = () => {
    if (user) {
      dispatch(deleteUser(user.id + ""));
    }
    if (setUser) {
      setUser({});
    }
    if (setModal) {
      setModal({
        open: false,
        type: "",
      });
    }
  };
  const madeAdmin = () => {
    if (user) {
      if (user.id) {
        dispatch(convertToadminRole(user.id));
      }
    }
    if (setUser) {
      setUser({});
    }
    if (setModal) {
      setModal({
        open: false,
        type: "",
      });
    }
  };

  const cancelar = () => {
    if (setModal) {
      setModal({
        open: false,
        type: "",
      });
    }
  };

  if (modal.type === "deleteUser" && user) {
    return (
      <Modal>
        <Overlay></Overlay>
        <ModalContent>
          {/* <h2>{title}</h2> */}
          <h2>¿Está seguro de eliminar al usuario?</h2>
          <p>ID: {user.id}</p>
          <p>EMAIL: {user.email}</p>
          <p>ROLE: {user.role}</p>
          <Flex>
            <button type="button" onClick={() => eliminar()}>
              Eliminar
            </button>
            <button type="button" onClick={() => cancelar()}>
              Cancelar
            </button>
          </Flex>
        </ModalContent>
      </Modal>
    );
  }
  if (modal.type === "changeRoleUser" && user) {
    return (
      <Modal>
        <Overlay></Overlay>
        <ModalContent>
          <h2>¿Está seguro de convertir en admin al siguiente usuario?</h2>
          <p>ID: {user.id}</p>
          <p>EMAIL: {user.email}</p>
          <p>ROLE: {user.role}</p>
          <Flex>
            <button type="button" onClick={() => madeAdmin()}>
              Convertir
            </button>
            <button type="button" onClick={() => cancelar()}>
              Cancelar
            </button>
          </Flex>
        </ModalContent>
      </Modal>
    );
  }
  if (modal.type === "addNews" || modal.type === "addCategories") {
    return (
      <Modal>
        <Overlay></Overlay>
        <ModalContent>
          {/* <h2>{title}</h2> */}
          <h2>{`Formulario para crear ${title}`}</h2>
          <form onSubmit={(e) => guardar(e)}>
            {properties.map((e, i) => (
              <Flex key={i}>
                <label htmlFor={`${e}`}>{e} :</label>
                <input name={e} type="text" />
              </Flex>
            ))}
            <Flex>
              <button className="button" type="submit">Guardar</button>
              <button className="button2" type="button" onClick={() => cancelar()}>
                Cancelar
              </button>
            </Flex>
          </form>
        </ModalContent>
      </Modal>
    );
  }
  return null;
};

export default ModalAdmin;
