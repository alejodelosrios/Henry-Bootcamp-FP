import { FC } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Favorites from "../Favorites";
import Notifications from "../Notifications";
import ProfModalButton from "../ProfModalButton";

type Props = {
  role: string;
};

const NavLinks = styled.nav`
  z-index: 1000;
  display: flex;
  align-items: center;
`;

const A = styled.button<{ About?: boolean }>`
  text-decoration: none;
  border: none;
  background: transparent;
  font-size: 20px;
  color: ${(props) => (props.About ? "#FFFFFF" : "grey")};
  font-weight: bolder;
  margin: 0 2rem;
  font-family: Open sans/bold;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  z-index: 1000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
`;

const PrivateMenu: FC<Props> = ({ role }) => {
  let location = useLocation();
  let isAbout = false;
  if (location.pathname === "/about-us") {
    isAbout = true;
  }

  const user = useSelector((state: any) => state.userReducer.applicant);

  return (
    <>
      <NavLinks className="multi-options">
        {role === "applicant" ? (
          <>
            <Link
              to="/home"
              style={{ textDecoration: "none", cursor: "default" }}
            >
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
          </>
        ) : role === "company" ? (
          <>
            <Link
              to="/home"
              style={{ textDecoration: "none", cursor: "default" }}
            >
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
          </>
        ) : (
          <>
            <Link
              to="/home"
              style={{ textDecoration: "none", cursor: "default" }}
            >
              <A About={isAbout}>{"Inicio"}</A>
            </Link>
            <Link
              to="/about-us"
              style={{ textDecoration: "none", cursor: "default" }}
            >
              <A About={isAbout}>{"Nosotros"}</A>
            </Link>
          </>
        )}
      </NavLinks>
      <ButtonsContainer>
        <Notifications role={role} />
        {role === "applicant" && <Favorites role={role} />}
        <ProfModalButton user={user} />
      </ButtonsContainer>
    </>
  );
};

export default PrivateMenu;
