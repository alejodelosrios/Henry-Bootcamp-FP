import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background: gray;
`;

const DashboardNavbar: FC = () => {
  return (
    <Container>
      <p>DashboardNavbar</p>
    </Container>
  );
};

export default DashboardNavbar;
