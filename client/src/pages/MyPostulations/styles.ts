import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  min-height: calc(100vh - 60px);
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
width: 100%;
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.typography.light};
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
