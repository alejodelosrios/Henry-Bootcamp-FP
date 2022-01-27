import {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Logout} from "../Logout";


type Props = {
  role: string;
}

const NavLinks = styled.nav`
  z-index: 1000;
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
const ButtonsContainer = styled.div`
  z-index: 1000;
`;

const PrivateMenu: FC<Props> = ({role}) => {
  //console.log(role);
  return (
    <>
      <NavLinks className="multi-options">
        {
          role === "applicant" ?
            <>
              <Link to="/home" style={{textDecoration: "none"}}>
                <A href="">{"Inicio"}</A>
              </Link>
              <Link to="/about-us" style={{textDecoration: "none"}}>
                <A href="">{"Nosotros"}</A>
              </Link>
              <Link to="/my-applications" style={{textDecoration: "none"}}>
                <A href="">{"Mis Postulaciones"}</A>
              </Link>
              <Link to="/notifications" style={{textDecoration: "none"}}>
                <A href="">{"Not"}</A>
              </Link>
            </>
            : role === "company" ?
              <>
                <Link to="/home" style={{textDecoration: "none"}}>
                  <A href="">{"Inicio"}</A>
                </Link>
                <Link to="/about-us" style={{textDecoration: "none"}}>
                  <A href="">{"Nosotros"}</A>
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
