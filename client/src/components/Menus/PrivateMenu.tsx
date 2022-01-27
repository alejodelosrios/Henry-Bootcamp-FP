import {FC} from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import {Logout} from "../Logout";


type Props = {
  roleId: number;
}

const NavLinks = styled.nav`
  z-index: 1000;
`;

const A = styled.a<{ About?: boolean }>`
  text-decoration: none;
  font-size: 20px;
  color: ${props => props.About ? '#FFFFFF' : 'black'};
  font-weight: bolder;
  margin-right: 1rem;
  font-family: Open sans/bold;
  padding: 0px 1rem;
`;
const ButtonsContainer = styled.div`
  z-index: 1000;
`;

const PrivateMenu: FC<Props> = ({roleId}) => {

  let location = useLocation()
  console.log(location)
  let isAbout=false
  if(location.pathname === '/about-us'){
    isAbout=true;
  }
  console.log(isAbout)

  return (
    <>
      <NavLinks className="multi-options">
        {
          roleId === 1 ?
            <>
              <Link to="/home" style={{textDecoration: "none"}}>
                <A href="">{"Inicio"}</A>
              </Link>
              <Link to="/about-us" style={{textDecoration: "none"}}>
                <A href="">{"Nosotros"}</A>
              </Link>
              <Link to="/frequent-questions" style={{textDecoration: "none"}}>
                  <A About={isAbout} href="">{"Preguntas Frecuentes"}</A>
              </Link>
              <Link to="/my-applications" style={{textDecoration: "none"}}>
                <A href="">{"Mis Postulaciones"}</A>
              </Link>
              <Link to="/notifications" style={{textDecoration: "none"}}>
                <A href="">{"Not"}</A>
              </Link>
            </>
            : roleId === 2 ?
              <>
                <Link to="/home" style={{textDecoration: "none"}}>
                  <A href="">{"Inicio"}</A>
                </Link>
                <Link to="/about-us" style={{textDecoration: "none"}}>
                  <A href="">{"Nosotros"}</A>
                </Link>
                <Link to="/frequent-questions" style={{textDecoration: "none"}}>
                  <A About={isAbout} href="">{"Preguntas Frecuentes"}</A>
                </Link>
                <A href="">{"Empresas"}</A>
              </>
              :
              <>
                <Link to="/home" style={{textDecoration: "none"}}>
                  <A href="">{"Inicio"}</A>
                </Link>
                <Link to="/about-us" style={{textDecoration: "none"}}>
                  <A href="">{"Nosotros"}</A>
                </Link>
                <A href="">{"Admin"}</A>
              </>
        }
      </NavLinks>
      <ButtonsContainer>
        <Logout contenido="Logout" estilo="primary" />
      </ButtonsContainer>
    </>
  );
};

export default PrivateMenu;
