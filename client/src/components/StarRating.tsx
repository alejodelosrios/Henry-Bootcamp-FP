import React, { useState } from "react";
import { RatingPercentage } from "./CompanyProfile/Styles";

export const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
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
                    ratingValue <= (hover || rating) ? "#C879FF" : "#8f8f8f",
                }}
              >
                ★
              </RatingPercentage>
            </label>
          );
        })}
      </div>
      <div className="rating-percentage">
        <RatingPercentage>{rating}</RatingPercentage>{/* //! la idea es que aca muestre un porcentaje total de la empresa */}
      </div>
    </div>
  );
};
