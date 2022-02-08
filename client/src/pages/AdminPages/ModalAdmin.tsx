import { FC } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  convertToadminRole,
  createCategory,
  createNew,
  deleteUser,
} from "../../redux/actions/private/adminActions";

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f0f1f5;
  color: #002448;
  padding: 2rem 3rem;
  border-radius: 1rem;
  max-width: 600px;
  min-width: 300px;
  h2 {
    margin: 0;
  }
  p {
    margin-bottom: 20px;
  }
  button {
    border: none;
    font-weight: 500;
    background-color: black;
    border: 1px solid black;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    padding: 8px 10px;
    transition: background-color 0.2s, color 0.2s, border 0.2s;
  }
  button:hover,
  button:active {
    /* background-color: var(--secundaryColor); */
  }
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

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
          <p>¿Está seguro de eliminar al usuario?</p>
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
          <p>¿Está seguro de convertir en admin al siguiente usuario?</p>
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
          <p>{`Formulario para crear ${title}`}</p>
          <Flex>
            <form onSubmit={(e) => guardar(e)}>
              {properties.map((e, i) => (
                <div key={i}>
                  <label htmlFor={`${e}`}>{e}</label>
                  <input name={e} type="text" />
                </div>
              ))}
              <button type="submit">Guardar</button>
              <button type="button" onClick={() => cancelar()}>
                Cancelar
              </button>
            </form>
          </Flex>
        </ModalContent>
      </Modal>
    );
  }
  return null;
};

export default ModalAdmin;
