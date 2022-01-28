import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {
  contenido: string;
  estilo: string;
}
const Button = styled.button<{ estilo?: String }>`
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

export const Login: FC<Props> = ({ contenido, estilo }) => {
  const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  return (
    <Button estilo={estilo} onClick={google}>
      {contenido}
    </Button>
  );
};
