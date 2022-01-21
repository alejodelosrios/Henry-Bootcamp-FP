import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
    contenido: string
    estilos: string
}

export const Logout: FC<Props> = ({ contenido, estilos }) => {
    const logout = () => {
        window.open("http://localhost:3001/auth/logout", "_self");
    };

    const Button = styled.button`
    ${estilos}
`

    return (
        <Button onClick={logout}>
            {contenido}
        </Button>
    );
};
