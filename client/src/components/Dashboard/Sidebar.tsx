import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30vw;
  height: 100%;
  border-right: 1px solid gray;
  padding:1rem;
`;
const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  //padding: 1rem 2rem;
  gap: 1rem;
  width: 100%;
`;
const NavLink = styled.li`
  width:100%;
  padding: 0.5rem ;
  background: brown;
`;
const Sidebar: FC = () => {
  return (
    <Container>
      <Nav>
        <NavLink>Inicio</NavLink>
        <NavLink>Profile</NavLink>
        <NavLink>Postulations</NavLink>
        <NavLink>Favorites</NavLink>
        <NavLink>Followed</NavLink>
      </Nav>
    </Container>
  );
};

export default Sidebar;
