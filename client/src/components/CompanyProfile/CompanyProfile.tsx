import { useEffect, useState } from "react";
import {
  CompanyInfo,
  CompanyName,
  FollowButton,
  Location,
  Logo,
  MainDiv,
  PaginateButtons,
  PaginateButtonsDiv,
  PresentationCard,
  Rating,
  RatingContainer,
} from "./Styles";
import { AboutCompany } from "./AboutCompany";
import { Mission } from "./Mission";
import { CompanyPosts } from "./CompanyPosts";
import { CompanyRating } from "./CompanyRating";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCompany } from "../../redux/actions/public/generalActions";
import HomeLayout from "../../pages/HomeLayout";

export const CompanyProfile = () => {
  const dispatch = useDispatch();
  const { companyId } = useParams();
  useEffect(() => {
    dispatch(getCompany(companyId));
  }, [dispatch, companyId]);

  const company = useSelector(
    (state: any) => state.companyReducer.companyDetail
  );
  const role = useSelector((state: any) => state.userReducer.role);

  const [flag, setFlag] = useState("information");

  const switchInformation = () => {
    setFlag("information");
  };
  const switchMission = () => {
    setFlag("mission");
  };
  const switchPosts = () => {
    setFlag("posts");
  };
  const switchRating = () => {
    setFlag("rating");
  };
  if (company.id === null) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <HomeLayout>
      <MainDiv>
        <PresentationCard className="presentation-card">
          <Logo src={company.companyLogo} alt="logo" />
          <CompanyInfo className="logo">
            <div className="company-name">
              <CompanyName>{company.name}</CompanyName>
            </div>
            <div className="location">
              <Location>{company.location}</Location>
            </div>
            <RatingContainer className="rating-container">
              <div className="componente-rating">
                <Rating className="rating-stars">
                  <div>estrellas numero '</div>
                  <div>estrellas comp clickeable</div>
                </Rating>
                <div className="rating-description">
                  Basado en 514 evaluaciones
                </div>
              </div>
              {role === "applicant" ? (
                <FollowButton>+ Seguir</FollowButton>
              ) : null}
            </RatingContainer>
          </CompanyInfo>
        </PresentationCard>
        <PaginateButtonsDiv className="paginate-buttons">
          <PaginateButtons
            onClick={() => switchInformation()}
            style={{
              background: flag === "information" ? "#9DD6FD" : "#EF5DA8",
            }}
          >
            Información
          </PaginateButtons>
          <PaginateButtons
            onClick={() => switchMission()}
            style={{ background: flag === "mission" ? "#9DD6FD" : "#EF5DA8" }}
          >
            Misión y valores
          </PaginateButtons>
          <PaginateButtons
            onClick={() => switchPosts()}
            style={{ background: flag === "posts" ? "#9DD6FD" : "#EF5DA8" }}
          >
            Publicaciones
          </PaginateButtons>
          <PaginateButtons
            onClick={() => switchRating()}
            style={{ background: flag === "rating" ? "#9DD6FD" : "#EF5DA8" }}
          >
            Rating
          </PaginateButtons>
        </PaginateButtonsDiv>
        {flag === "information" ? <AboutCompany /> : null}
        {flag === "mission" ? <Mission /> : null}
        {flag === "posts" ? <CompanyPosts /> : null}
        {flag === "rating" ? <CompanyRating /> : null}
      </MainDiv>
    </HomeLayout>
  );
};

export default CompanyProfile;
