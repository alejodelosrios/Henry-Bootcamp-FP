import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Login } from "./Login";
import { Logout } from "./Logout";
import logo from "../assets/logo.svg";

const Container = styled.div`
  width: 100vw;
`;

const Button = styled.button`
  background: #9dd6fd;
  border: none;
  border-radius: 15px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  font-family: Open sans/Regular;
`;

const A = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: #757577;
  font-weight: bolder;
  margin-right: 1rem;
  font-family: Open sans/bold;
  padding: 0px 1rem;
`;
const NavLinks = styled.nav`
  z-index: 1000;
`;
const LoginButton = styled.div`
  z-index: 1000;
`;
const Name = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: black;
  font-weight: bolder;
  cursor: pointer;
  margin-right: 1rem;
`;

const MainFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1000;
`;

interface Props {
  userLogged: any;
}

export const NavBar: FC<Props> = ({ userLogged }) => {
  // console.log(userLogged)
  if (userLogged) {
    return (
      <div>
        <MainFlexDiv className="flex-container">
          <FlexDiv className="imagen-logo">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logo} alt="logo" />
            </Link>
          </FlexDiv>
          <NavLinks className="multi-options">
            <A href="/">{"Inicio"}</A>
            <A href="">{"Postulantes"}</A>
            <A href="">{"Empresas"}</A>
            <A href="">{"Nosotros"}</A>
          </NavLinks>
          <div>
            <Name href="/profile">{userLogged?.displayName}</Name>
            <Logout contenido="Logout" estilo="logout" />
          </div>
        </MainFlexDiv>
      </div>
    );
  } else {
    return (
      <Container>
        <MainFlexDiv className="flex-container">
          <FlexDiv className="imagen-logo">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logo} alt="logo" />
            </Link>
          </FlexDiv>
          <NavLinks className="multi-options">
            <A href="">{"Inicio"}</A>
            <A href="">{"Postulantes"}</A>
            <A href="">{"Empresas"}</A>
            <A href="">{"Nosotros"}</A>
          </NavLinks>
          <LoginButton className="login">
            <Login contenido="Google Login" estilo="primary" />
          </LoginButton>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </MainFlexDiv>
      </Container>
    );
  }
};
