import {FC} from "react";
import styled from "styled-components";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import Sidebar from "../../components/Dashboard/Sidebar";

const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow-Y:auto;
  padding: 5rem 3rem
`;

const Dashboard: FC = ({children}) => {
  return (
    <div>
      <DashboardNavbar />
      <DashboardContainer>
        <Sidebar />
        <Content className="content">
          {children}
        </Content>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
