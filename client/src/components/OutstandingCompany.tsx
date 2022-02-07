import styled from "styled-components";
import OCCard from "./OutstandingCompanyCard";
import { Link } from "react-router-dom";


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const OutstandingCompany = () => {
    return (
        <Container>
            {/* <Link to={`/company/${companyId}`}>
                <OCCard />
            </Link> */}
        </Container>
    );
};

export default OutstandingCompany;