import styled from "styled-components";
import OCCard from "./OutstandingCompanyCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OCPublicity from "./OutstandingCompanyPublicity";
import { useEffect } from "react";
import { getPremiums } from "../redux/actions/private/companyActions";

const divStyle = {
    textDecoration: "none",
    padding: 0,
};

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
    const dispatch = useDispatch();
    const premiums = useSelector(
        (state: any) => state.companyReducer.totalPremiums
    );
    const userRole = useSelector((state: any) => state.userReducer.role);
    console.log("premiums: ", premiums);

    useEffect(() => {
        dispatch(getPremiums());
    }, [dispatch]);

    return (
        <Container>
            {userRole === "company" || userRole === "" ? <OCPublicity /> : null}
            {premiums.length === 0
                ? null
                : premiums.map((p: any) => (
                      <Link to={`/company/${p.id}`} key={p.id} style={divStyle}>
                          <OCCard
                              id={p.id}
                              img={p.companyLogo}
                              name={p.name}
                              location={p.location}
                          />
                      </Link>
                  ))}
        </Container>
    );
};

export default OutstandingCompany;
