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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
const Sidebar: FC = () => {
  const location = useLocation();
  return (
    <Container>

      <NavLink to="/" >
        <img src={logo} alt="logo" />
      </NavLink>
      <Nav>
        <NavLink to="/home" style={{textDecoration: "none"}}>
          <CustomNavLink>
            <LinkImg>
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h18v-10h3zm-5 8h-14v-10.26l7-6.912 7 6.99v10.182zm-5-1h-4v-6h4v6z" /></svg>
            </LinkImg>
            Inicio
          </CustomNavLink>
        </NavLink>
        <NavLink to="/profile" style={{textDecoration: "none"}}>
          {location.pathname === "/profile" ?
            <CustomNavLink2>
              <LinkImg2>
                <svg fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z" /></svg>
              </LinkImg2>
              Perfil
            </CustomNavLink2>
            :
            <CustomNavLink>
              <LinkImg>
                <svg fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z" /></svg>
              </LinkImg>
              Perfil
            </CustomNavLink>
          }
        </NavLink>
        <NavLink to="/my-applications" style={{textDecoration: "none"}}>
          {location.pathname === "/my-applications" ?
            <CustomNavLink2>
              <LinkImg2>
                <svg fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" /></svg>
              </LinkImg2>
              Postulaciones
            </CustomNavLink2>
            :
            <CustomNavLink>
              <LinkImg>
                <svg fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" /></svg>
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
