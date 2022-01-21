import styled, { css } from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  
  margin-bottom: 50px;
  background: ${props => props.theme.colors.backgrounds.white};
`;

export const Image = styled.img<{ circle?: boolean; rectangle?: boolean }>`
  ${(props) =>
    props.circle
      ? css`
          width: 400px;
          height: 400px;
          border-radius: 50%;
        `
      : props.rectangle
      ? css`
          width: 100%;
          height: 400px;
          margin-bottom: 22.5px;
        `
      : null};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.typography.dark};
  font-weight: bolder;
  font-size: 120px;
  display: flex;
  flex-wrap: wrap;
`;

export const HL = styled.p`
  color: ${props => props.theme.colors.details.primary};
  margin: 0;
`;

export const Paragraph = styled.h2<{ bold?: boolean }>`
  color: grey;
  font-size: 35px;
  margin-top: 0px;
  margin-bottom: 22.5px;
  font-weight: normal;

  ${(props: any) => 
    props.bold && (css`font-weight: bolder;`)
  }
`;

export const Footer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 100px;
  margin-right: 10px;
`;
