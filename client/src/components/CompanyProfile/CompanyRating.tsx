import React from "react";
import { useSelector } from "react-redux";
import { StarRating } from "../StarRating";
import { RatingGraph } from "./RatingGraph";
import {
  MainDiv,
  Rating,
  RatingCompContainer,
  RatingContaier,
  RatingPercentage,
  RatingTitle,
  UserRateContainer,
  UserRatingText,
  UserRatingTitle,
} from "./Styles";
import { VisualRating } from "./VisualRating";

export const CompanyRating = () => {
  const company = useSelector((state: any) => state.companyReducer.companyDetail);
  return (
    <MainDiv>
      <RatingContaier className="rating-container">
        <div className="title">
          <RatingTitle>Evaluación general de {company.name}</RatingTitle>
          <VisualRating/>
        </div>
        <div className="componente-rating">
          <RatingGraph/>
        </div>
      </RatingContaier>
    </MainDiv>
  );
};
