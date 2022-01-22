import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {
  contenido: string;
  estilos: string;
}
const Button = styled.button``;
export const Login: FC<Props> = ({ contenido, estilos }) => {
  const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  return <Button onClick={google}>{contenido}</Button>;
};
