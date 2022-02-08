import { FC } from "react";
import styled from "styled-components";
import Storage from "../services/storage";

interface Props {
  contenido: string;
  estilo: string;
}
const Button = styled.button<{ estilo?: String }>`
  width: 100%;
  background: ${(props: any) =>
    props.estilo === "primary" ? "#c879ff" : "#9DD6FD"};
  border: none;
  border-radius: 15px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  font-family: Open sans/Regular;
`;

export const Logout: FC<Props> = ({ contenido, estilo }) => {
  const logout = () => {
    Storage.reset();
    window.open(`${process.env.REACT_APP_GOOGLE}/auth/logout`, "_self");
  };

  return (
    <Button estilo={estilo} onClick={logout}>
      {contenido}
    </Button>
  );
};
