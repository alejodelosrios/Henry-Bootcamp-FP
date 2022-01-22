import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  contenido: string;
  estilos: string;
}
const Button = styled.button<{ estilos?: String }>`
  ${(props: any) => props.estilos}
`;

export const Logout: FC<Props> = ({ contenido, estilos }) => {
  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };

  return (
    <Button estilos={estilos} onClick={logout}>
      {contenido}
    </Button>
  );
};
