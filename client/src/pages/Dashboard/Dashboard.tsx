import {FC} from "react";
import styled from "styled-components";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import Sidebar from "../../components/Dashboard/Sidebar";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const DashboardContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 80vw;
  height: inherit;
`;
const Content = styled.div`
  width: inherit;
  height: calc(100vh - 60px);
  overflow-Y:auto;
  padding: 5rem 3rem
`;

const Dashboard: FC = ({children}) => {
  return (
    <Container>
      <Sidebar />
      <DashboardContainer>
        <DashboardNavbar />
        <Content className="content">
          {children}
        </Content>
      </DashboardContainer>
    </Container>
  );
};

export default Dashboard;
