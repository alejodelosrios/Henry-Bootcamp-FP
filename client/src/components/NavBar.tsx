import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import PrivateMenu from "./Menus/PrivateMenu";
import PublicMenu from "./Menus/PublicMenu";

const Container = styled.div`
  width: 100vw;
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
  width: 5vw;
`;

const Img = styled.img`
width: 180px;
`

export const NavBar: FC = () => {
  const role = useSelector((state: any) => state.userReducer.role);
  return (
    <Container>
      <MainFlexDiv className="flex-container">
        <FlexDiv className="imagen-logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Img src={logo} alt="logo" />
          </Link>
        </FlexDiv>
        {role ? <PrivateMenu role={role} /> : <PublicMenu />}
      </MainFlexDiv>
    </Container>
  );
};
