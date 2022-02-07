import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Rating, RatingPercentage } from "./Styles";

export const VisualRating = () => {
  const company = useSelector(
    (state: any) => state.companyReducer.companyDetail.reviews
  );
  const average = () => {
    let valores: any = [];
    company.map((valor: any) => valores.push(valor.score));
    let total = 0;
    for (let i = 0; i < valores.length; i++) {
      total += valores[i];
    }
    return total / valores.length;
  };
  return (
    <div>
      <Rating className="rating-stars">
        <div style={{fontSize: '25px', textAlign: 'center', fontWeight: 'bold', marginTop: '10px', marginRight: '10px', color: '#313944'}}>{average().toString().slice(0, 4)}</div>
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
                <label key={i}>
                  <input
                    style={{ display: "none" }}
                    type="radio"
                    name="rating"
                    value={ratingValue}
                  />
                  <div
                    style={{
                      color:
                        ratingValue <= Math.round(average())
                          ? "#ffc100"
                          : "#8f8f8f",
                      fontSize: "40px",
                    }}
                  >
                    ★
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </Rating>
      <div className="rating-description" style={{color: '#808080'}}>
        Basado en {company.length} evaluaciones
      </div>
    </div>
  );
};
