import {FC} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import {useLocation} from 'react-router-dom';

const Container = styled.div`
  width: 20vw;
  height: inherit;
  padding:1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  //padding: 1rem 2rem;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;
`;
const CustomNavLink = styled.li`
  width:100%;
  padding: 0 0.5rem ;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(p) => p.theme.colors.typography.darkest};
`;
const CustomNavLink2 = styled.li`
  width:100%;
  padding: 0 0.5rem ;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(p) => p.theme.colors.typography.darkest};
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const LinkImg = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  width:40px;
  height: 40px;
  gap: 1rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const LinkImg2 = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  width:40px;
  height: 40px;
  gap: 1rem;
  border-radius: 0.5rem;
  color: white;
  margin-right: 1rem;
  background-color: ${(p) => p.theme.colors.details.primary};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const Sidebar: FC = () => {
  const location = useLocation();
  return (
    <Container>

      <NavLink to="/" >
        <img src={logo} alt="logo" />
      </NavLink>
      <Nav>
        <NavLink to="/" style={{textDecoration: "none"}}>
          <CustomNavLink>
            <LinkImg>
              P
            </LinkImg>
            Inicio
          </CustomNavLink>
        </NavLink>
        <NavLink to="/profile" style={{textDecoration: "none"}}>
          {location.pathname === "/profile" ?
            <CustomNavLink2>
              <LinkImg2>
                P
              </LinkImg2>
              Perfil
            </CustomNavLink2>
            :
            <CustomNavLink>
              <LinkImg>
                P
              </LinkImg>
              Perfil
            </CustomNavLink>
          }
        </NavLink>
        <NavLink to="/my-applications" style={{textDecoration: "none"}}>
          {location.pathname === "/my-applications" ?
            <CustomNavLink2>
              <LinkImg2>
                P
              </LinkImg2>
              Postulaciones
            </CustomNavLink2>
            :
            <CustomNavLink>
              <LinkImg>
                P
              </LinkImg>
              Postulaciones
            </CustomNavLink>
          }
        </NavLink>
      </Nav>
    </Container>
  );
};

export default Sidebar;
