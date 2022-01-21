import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Login } from './Login';
import { Logout } from './Logout';

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

interface Props {
    userLogged: any
}

export const NavBar: FC<Props> = ({ userLogged }) => {
    console.log(userLogged)
    if (userLogged) {
        return (
            <div>
                <FlexDiv className='flex-container'>
                    <div className='imagen-logo'>
                        <Link to='/' style={{textDecoration: 'none'}}><img src="logo" alt="logo" /></Link>
                    </div>
                    <div className='multi-options'>
                        <A href="">{'Publicar gratis! >'}</A>
                        <A href="">{'Reclutadores >'}</A>
                        <Name>{userLogged?.displayName}</Name>
                        <Logout contenido='Logout' estilos={estilos}/>
                    </div>
                </FlexDiv>
            </div>
        )
    } else {
        return (
            <div>
                <FlexDiv className='flex-container'>
                    <div className='imagen-logo'>
                        <Link to='/' style={{textDecoration: 'none'}}><img src="logo" alt="logo" /></Link>
                    </div>
                    <div className='multi-options'>
                        <A href="">{'Publicar gratis! >'}</A>
                        <A href="">{'Reclutadores >'}</A>
                        <Login contenido='Ingresar >' estilos={estilos} />
                    </div>
                </FlexDiv>
            </div>
        )
    }
    
}
