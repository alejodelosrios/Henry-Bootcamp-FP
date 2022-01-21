import styled, { css } from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  width: 100%;
  background-color: lightgray;
`;


export const CatCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 180px;
    height: 192px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 12px 5px rgba(93, 95, 239, 0.1);
    border-radius: 30px;
`;

export const Image = styled.img`
    width: 80px;
    height: 80px;
`

export const CardTitle = styled.p`
    font-weight: bold;
    color: ${props => props.theme.colors.typography.dark};
`