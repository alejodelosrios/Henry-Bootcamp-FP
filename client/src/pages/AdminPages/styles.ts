import styled from "styled-components";
/**
 * Estilos  GENERALES
 */
export const Flex = styled.div<{ mode?: string }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${(props) =>
    props.mode === "start" ? "flex-start" : "space-between"};
`;

/**
 * Estilos de cada SECCIÓN
 */
export const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const TableNavBar = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Title = styled.h3<{}>`
  font-size: 40px;
  color: ${(props) => props.theme.colors.typography.dark};
  margin-right: 50px;
`;

export const Search = styled.input`
  width: 400px;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  color: #757577;
  border-radius: 0.5rem;
  border-radius: 0.5rem;
  border: 0.5px solid #f0f1f5;
  padding-right: 0px; ;
`;

export const AddButton = styled.button<{}>`
  width: fit-content;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.colors.details.primary};
  border: none;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 4px 4px 12px 5px rgba(93, 95, 239, 0.1);
  cursor: pointer;
  font-family: ${(props) => props.theme.colors.typography.light};
  &:hover {
    background-color: transparent;
    border: 0.5px solid ${(props) => props.theme.colors.details.primary};
    color: ${(props) => props.theme.colors.details.primary};
  }
`;

/**
 * Estilos de la TABLA
 */

export const TableButton = styled.button<{ mode?: string }>`
  width: fit-content;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${(props) =>
    props.mode === "secondary"
      ? props.theme.colors.details.secondary
      : props.theme.colors.details.primary};
  border: none;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 4px 4px 12px 5px rgba(93, 95, 239, 0.1);
  cursor: pointer;
  font-family: ${(props) => props.theme.colors.typography.light};
  margin-right: 0.5rem;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    background-color: transparent;
    border: ${(props) =>
      props.mode === "secondary"
        ? `0.5px solid ${props.theme.colors.details.secondary}`
        : `0.5px solid ${props.theme.colors.details.primary}`};
    color: ${(props) =>
      props.mode === "secondary"
        ? props.theme.colors.details.secondary
        : props.theme.colors.details.primary};
  }
`;

export const Table = styled.table`
  width: 100%;
  thead {
    th {
      border: none;
      border-bottom: 0.5px solid
        ${(props) => props.theme.colors.details.primary};
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 0 0 20px 0;
    }
  }
  tbody {
    td {
      text-align: center;
      border: none;
      border-bottom: 0.5px solid
        ${(props) => props.theme.colors.typography.light};
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 10px 0 10px 0;
    }
  }
`;

/**
 * Estilos del MODAL
 */

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
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
