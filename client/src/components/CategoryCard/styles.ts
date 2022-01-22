import styled, { css } from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 2rem; */
  width:80vw;
  background-color: rgba(0,0,0,0);
`;


export const CatCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 150px;
    height: 172px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 12px 5px rgba(93, 95, 239, 0.1);
    border-radius: 30px;
`;

export const Image = styled.img`
    width: 50px;
    height: 50px;
`

export const CardTitle = styled.p`
    font-weight: bold;
    color: ${props => props.theme.colors.typography.dark};
`