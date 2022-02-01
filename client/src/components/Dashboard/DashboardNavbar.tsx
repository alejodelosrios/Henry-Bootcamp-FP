import {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {useSelector} from "react-redux";
import Notifications from "../Notifications";
import ProfModalButton from "../ProfModalButton";
import Favorites from "../Favorites";

const Container = styled.div`
  width: 100%;
  height: 60px;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 1.5rem;
`;

const ButtonsContainer = styled.div`
  z-index: 1000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:0.3rem;
`;

const DashboardNavbar: FC = () => {

  const user = useSelector((state: any) => state.userReducer.applicant);
  const role = useSelector((state: any) => state.userReducer.role);
  return (
    <Container>
      <ButtonsContainer>
        <Notifications role={role} />
        {role === "applicant" && (
          <Favorites role={role} />
        )}

        <ProfModalButton user={user} />
      </ButtonsContainer>
    </Container>
  );
};

export default DashboardNavbar;
