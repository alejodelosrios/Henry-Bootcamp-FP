import styled from "styled-components";

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 9999;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

export const ModalContent = styled.div`
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
    margin-bottom: 20px;
    font-size: bold;
  }
  p {
    margin-bottom: 10px;
  }

  label {
    font-size: 17px;
  }
  input {
    min-width: 300px;
    padding: 0.2rem 1rem;
    font-family: "Open Sans", sans-serif;
    color: #757577;
    border-radius: 0.5rem;
    border-radius: 0.5rem;
    border: 0.5px solid #f0f1f5;
    padding-right: 0px;
    margin-bottom: 10px;
  }

  button {
    font-family: "Poppins", sans-serif;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    color: black;
    border-color: ${(props) => props.theme.colors.details.primary};
    background-color: transparent;
    cursor: pointer;
    transition-duration: 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.colors.details.primary};
      color: ${(props) => props.theme.colors.typography.lighter};
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
