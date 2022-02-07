import { FC } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createCategory, createNew } from "./adminActions";

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

type Props = {
  title: string;
  properties: string[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateModal: FC<Props> = ({ title, properties, setModal }) => {
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

    setModal(false);
  };

  const cancelar = () => {
    setModal(false);
  };

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
};

export default CreateModal;
