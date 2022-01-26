import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useSelector } from "react-redux";
import { Logout } from "./Logout";

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
const ButtonsContainer = styled.div`
  z-index: 1000;
`;
const Buttons = styled.div`
  display: flex;
  gap: 0.7rem;
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

export const NavBar: FC = () => {
  const role = useSelector((state: any) => state.userReducer.roleId);
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
        <ButtonsContainer>
          {!role ? (
            <Buttons>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </Buttons>
          ) : (
            <Logout contenido="Logout" estilo="primary" />
          )}
        </ButtonsContainer>
      </MainFlexDiv>
    </Container>
  );
};
