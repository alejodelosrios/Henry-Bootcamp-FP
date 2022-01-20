import React, { FC } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';

interface Props {
    contenido: string
    estilos: string
}

export const Login: FC<Props> = ({ contenido, estilos }) => {
    const Button = styled.button`
    ${estilos}
`
    const { loginWithPopup, loginWithRedirect } = useAuth0();

    return <Button onClick={() => loginWithRedirect()}>{contenido}</Button>;
};
