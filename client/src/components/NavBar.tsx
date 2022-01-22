import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Login } from './Login';
import { Logout } from './Logout';
import logo from '../assets/logo.svg'

const A = styled.a`
    text-decoration: none;
    font-size: 20px;
    color: #757577;
    font-weight: bolder;
    margin-right: 1rem;   
    font-family: Open sans/bold;
    padding: 0px 1rem;
`
const Name = styled.a`
    text-decoration: none;
    font-size: 16px;
    color: black;
    font-weight: bolder;    
    cursor: pointer;
    margin-right: 1rem;
`

const MainFlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
`
const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const estilos = `
    background: #c879ff;
    border: none;
    border-radius: 15px;
    padding: 12px 20px;
    cursor: pointer;
    font-size: 20px;
    color: white;
    font-family: Open sans/Regular;
`

interface Props {
    userLogged: any
}

export const NavBar: FC<Props> = ({ userLogged }) => {
    console.log(userLogged)
    if (userLogged) {
        return (
            <div>
                <MainFlexDiv className='flex-container'>
                    <FlexDiv className='imagen-logo'>
                        <Link to='/' style={{ textDecoration: 'none' }}><img src={logo} alt="logo" /></Link>
                    </FlexDiv>
                    <div className='multi-options'>
                        <A href="/">{'Inicio'}</A>
                        <A href="">{'Postulantes'}</A>
                        <A href="">{'Empresas'}</A>
                        <A href="">{'Nosotros'}</A>
                    </div>
                    <div>
                        <Name href='/profile'>{userLogged?.displayName}</Name>
                        <Logout contenido='Logout' estilos={estilos}/>
                    </div>
                </MainFlexDiv>
            </div>
        )
    } else {
        return (
            <div>
                <MainFlexDiv className='flex-container'>
                    <FlexDiv className='imagen-logo'>
                        <Link to='/' style={{ textDecoration: 'none' }}><img src={logo} alt="logo" /></Link>
                    </FlexDiv>
                    <div className='multi-options'>
                        <A href="">{'Inicio'}</A>
                        <A href="">{'Postulantes'}</A>
                        <A href="">{'Empresas'}</A>
                        <A href="">{'Nosotros'}</A>
                    </div>
                    <div className='login'>
                        <Login contenido='Ingresar' estilos={estilos} />
                    </div>
                </MainFlexDiv>
            </div>
        )
    }
    
}
