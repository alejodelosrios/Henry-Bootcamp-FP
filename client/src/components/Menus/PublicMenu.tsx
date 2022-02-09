import { FC } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

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

const NavLinks = styled.nav`
  z-index: 1000;
`;

const A = styled.button<{ About?: boolean }>`
  border: none;
  background: transparent;
  text-decoration: none;
  font-size: 20px;
  color: ${(props) => (props.About ? "#FFFFFF" : "grey")};
  font-weight: bolder;
  margin: 0 2rem;
  font-family: Open sans/bold;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  z-index: 1000;
`;
const Buttons = styled.div`
  display: flex;
  gap: 0.7rem;
`;

const PublicMenu: FC = () => {
  let location = useLocation();
  let isAbout = false;
  if (location.pathname === "/about-us") {
    isAbout = true;
  }

  return (
    <>
      <NavLinks className="multi-options">
        <Link to="/home" style={{ textDecoration: "none", cursor: "default" }}>
          <A About={isAbout}>{"Inicio"}</A>
        </Link>
        <Link
          to="/about-us"
          style={{ textDecoration: "none", cursor: "default" }}
        >
          <A About={isAbout}>{"Nosotros"}</A>
        </Link>
        <Link
          to="/frequent-questions"
          style={{ textDecoration: "none", cursor: "default" }}
        >
          <A About={isAbout}>{"Preguntas Frecuentes"}</A>
        </Link>
        <Link to="/blog" style={{ textDecoration: "none", cursor: "default" }}>
          <A About={isAbout}>{"Blog"}</A>
        </Link>
      </NavLinks>
      <ButtonsContainer>
        <Buttons>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </Buttons>
      </ButtonsContainer>
    </>
  );
};

export default PublicMenu;
