import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import styled from "styled-components";
import {createUser} from "../redux/actions/actionCreators";

type Props = {
  title: string
}

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

  position:absolute;
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



const ChooseRoleModal: FC<Props> = ({title}) => {

  let navigate = useNavigate();
  const dispatch = useDispatch();


  const email = useSelector(
    (state: any) => state.userReducer.email
  );

  const onClick = (e: any) => {
    const userData = {
      email: email,
      roleId: (e.target.name === "empresa") ? 2 : 1
    }
    dispatch(createUser(userData))
    navigate("/home")
  }


  return (
    <Modal>
      <Overlay></Overlay>
      <ModalContent>
        <h2>{title}</h2>
        <p>Escoge cual es tu rol dentro de la plataforma:</p>
        <Flex>
          <button name="postulante" onClick={(e) => onClick(e)}>
            Postulante
          </button>
          <button name="empresa" onClick={(e) => onClick(e)}>
            Empresa
          </button>
        </Flex>
      </ModalContent>
    </Modal>
  )
}

export default ChooseRoleModal;
