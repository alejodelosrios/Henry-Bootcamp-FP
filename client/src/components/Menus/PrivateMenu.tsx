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
  color: ${(props) => (props.About ? "#FFFFFF" : "black")};
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
`;

const Options = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`

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
            <Link to="/home" style={{ textDecoration: "none", cursor:"default"  }}>
              <A About={isAbout}>{"Inicio"}</A>
            </Link>
            <Link to="/about-us" style={{ textDecoration: "none", cursor:"default"  }}>
              <A About={isAbout}>{"Nosotros"}</A>
            </Link>
            <Link to="/frequent-questions" style={{ textDecoration: "none", cursor:"default"  }}>
              <A About={isAbout}>{"Preguntas Frecuentes"}</A>
            </Link>
            <Link to="/my-applications" style={{ textDecoration: "none", cursor:"default"  }}>
              <A About={isAbout}>{"Mis Postulaciones"}</A>
            </Link>
          </>
        ) : role === "company" ? (
          <>
            <Link to="/home" style={{ textDecoration: "none", cursor:"default"  }}>
              <A About={isAbout}>{"Inicio"}</A>
            </Link>
            <Link to="/about-us" style={{ textDecoration: "none", cursor:"default"  }}>
              <A About={isAbout}>{"Nosotros"}</A>
            </Link>
            <Link to="/frequent-questions" style={{ textDecoration: "none", cursor:"default"  }}>
              <A About={isAbout}>{"Preguntas Frecuentes"}</A>
            </Link>
            <A About={isAbout}>{"Empresas"}</A>
          </>
        ) : (
          <>
            <Link to="/home" style={{ textDecoration: "none", cursor:"default"  }}>
              <A About={isAbout}>{"Inicio"}</A>
            </Link>
            <Link to="/about-us" style={{ textDecoration: "none", cursor:"default"  }}>
              <A About={isAbout}>{"Nosotros"}</A>
            </Link>
            <A About={isAbout}>{"Admin"}</A>
          </>
        )}
      </NavLinks>
      <ButtonsContainer>
        <Options>
          <Notifications role={role} />
        </Options>

        <Options>
          <Favorites role={role}/>
        </Options>

        <Options>
          <ProfModalButton user={user}/>
        </Options>
      </ButtonsContainer>
    </>
  );
};

export default PrivateMenu;
