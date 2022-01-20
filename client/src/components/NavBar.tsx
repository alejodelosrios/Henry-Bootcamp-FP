import React from 'react';
import styled from 'styled-components';
import { Login } from './Login';
import { useAuth0 } from '@auth0/auth0-react';

const A = styled.a`
    text-decoration: none;
    font-size: 16px;
    color: blue;
    font-weight: bolder;
    margin-right: 1rem;   
`
const Name = styled.a`
    text-decoration: none;
    font-size: 16px;
    color: black;
    font-weight: bolder;    
    cursor: pointer
`

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`
const estilos = `
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: blue;
    font-weight: bolder;
`

export const NavBar = () => {
    const { isAuthenticated, user } = useAuth0();
    return (
        <div>
            <FlexDiv className='flex-container'>
                <div className='imagen-logo'>
                    <img src="logo" alt="logo" />
                </div>
                <div className='multi-options'>
                    <A href="">{'Publicar gratis! >'}</A>
                    <A href="">{'Reclutadores >'}</A>
                    {
                        !isAuthenticated ?
                            <Login contenido='Ingresar >' estilos={estilos} />
                            :
                            <Name>{ user?.name }</Name>
                    }
                </div>
            </FlexDiv>
        </div>
    )
}
