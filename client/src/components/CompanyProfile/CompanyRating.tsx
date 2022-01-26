import React from "react";
import { MainDiv, Rating, RatingCompContainer, RatingContaier, RatingPercentage, RatingTitle, UserRateContainer, UserRatingText, UserRatingTitle } from "./Styles";

export const CompanyRating = () => {
  return (
    <MainDiv>
      <RatingCompContainer className="row">
              <RatingContaier className="rating-container">
                  <div className="title">
                    <RatingTitle>Evaluación general de Pedidos Ya</RatingTitle>
                  </div>
                  <div className='componente-rating'>
                    <Rating className='rating-stars'>
                        <div>estrellas numero '</div>
                        <div>estrellas comp clickeable</div>
                    </Rating>
                    <div className='rating-description'>
                        Basado en 514 evaluaciones
                      </div>
                      <div className="rating-graph">
                          Grafico de rating
                      </div>
                  </div>                  
              </RatingContaier>
              <UserRateContainer className="user-rate-contaier">
                  <div className="title">
                      <UserRatingTitle>Tu opinión cuenta</UserRatingTitle>
                  </div>
                  <div className="text">
                        <UserRatingText>Califica a la empresa según te experiencia como empleade o postulante</UserRatingText>
                  </div>
                  <div className="rating-stars">
                      <RatingPercentage>★★★★☆</RatingPercentage>
                  </div>
                  <div className="rating-percentage">
                      <RatingPercentage>86%</RatingPercentage>
                  </div>
                  <div className="recomendation">
                      <UserRatingText>profesionales recomioendan trabajar aqui</UserRatingText>
                  </div>
              </UserRateContainer>
      </RatingCompContainer>
    </MainDiv>
  );
};
