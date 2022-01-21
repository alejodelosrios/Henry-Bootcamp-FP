import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
    contenido: string
    estilos: string
}

export const Login: FC<Props> = ({ contenido, estilos }) => {
    const google = () => {
        window.open("http://localhost:3001/auth/google", "_self");
    };

    const Button = styled.button`
    ${estilos}
`
    return <Button onClick={google}>{contenido}</Button>;
};
