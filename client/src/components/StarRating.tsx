import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { postReview } from "../redux/actions/private/applicantActions";
import {
  FollowButton,
  RatingPercentage,
  UserRateContainer,
  UserRatingText,
  UserRatingTitle,
} from "./CompanyProfile/Styles";

interface Props {
  companyId: number;
}

export const StarRating: FC<Props> = ({ companyId }) => {
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [rated, setRated] = useState(false);
  let review = {
    description: "a",
      score: rating,
      companyId: companyId,
  }
  const handleSubmit = () => {
    if (rating === 0) {
      return alert("Debes elegir un puntaje!");
    }
    setRated(true);
    dispatch(postReview(review, companyId));
  };
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        background: "white",
        width: "auto",
        height: "auto",
        borderRadius: "20px",
      }}
    >
      {!rated ? (
        <UserRateContainer className="user-rate-contaier">
          <div className="title">
            <UserRatingTitle>Tu opinión cuenta</UserRatingTitle>
          </div>
          <div className="text">
            <UserRatingText>
              Califica a la empresa según tu experiencia como empleade o
              postulante
            </UserRatingText>
          </div>
          <RatingPercentage>{rating}</RatingPercentage>
          <div
            style={{
              display: "flex",
            }}
          >
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i}>
                  <input
                    style={{ display: "none" }}
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                  />
                  <RatingPercentage
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                    style={{
                      cursor: "pointer",
                      color:
                        ratingValue <= (hover || rating)
                          ? "#C879FF"
                          : "#8f8f8f",
                    }}
                  >
                    ★
                  </RatingPercentage>
                </label>
              );
            })}
          </div>
          <button
            style={{
              border: "none",
              background: "#C879FF",
              padding: "10px 20px",
              borderRadius: "10px",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "600",
            }}
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </UserRateContainer>
      ) : (
        <UserRateContainer>
          <div className="title">
            <UserRatingTitle style={{ marginBottom: "100px" }}>
              Calificación enviada
            </UserRatingTitle>
          </div>
          <RatingPercentage
            style={{
              fontSize: "200px",
              color: "#00df00",
              borderRadius: "100%",
              border: "5px solid #00df00",
              width: "180px",
              height: "180px",
              textAlign: "center",
            }}
          >
            ✓
          </RatingPercentage>
        </UserRateContainer>
      )}
    </div>
  );
};
