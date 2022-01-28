import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 80vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TopBackground = styled.div`
  position: absolute;
  height: 180px;
  top: 0;
  left: 0;
  background: rgba(200, 121, 255, 0.1);
  width: 100%;
  z-index: 998;
`;
export const Title = styled.h1`
font-size: 5vw;
line-height: 4vw;
text-align: center;
align-items: center;
margin-top: 0.7vw;
color: ${props=> props.theme.colors.typography.dark};
`
export const PT = styled.p`
  color: ${props => props.theme.colors.details.primary};
  margin-bottom: 30px;;
  text-align: center;
`;

export const CardContainer =styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 4vw 0;
`