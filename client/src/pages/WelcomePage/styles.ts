import styled, { css } from "styled-components";

export const Section = styled.section<{ primary?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  /* margin-bottom: 50px; */
  padding: 50px 50px;
  ${(props) =>
    props.primary &&
    css`
      background: grey;
    `};
`;

export const Image = styled.img<{ circle?: boolean; rectangle?: boolean }>`
  ${(props) =>
    props.circle
      ? css`
          width: 400px;
          height: 400px;
          border-radius: 200px;
        `
      : props.rectangle
      ? css`
          width: 100%;
          height: 400px;
          margin-bottom: 22.5px;
        `
      : null};
`;
export const Card = styled.div<{ width?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 400px;

  ${(props: any) =>
    props.width
      ? css`
          width: 100%;
        `
      : null}
`;
export const Title = styled.h3<{ center?: boolean }>`
  color: black;
  font-weight: bold;
  ${(props: any) =>
    props.center
      ? css`
          text-align: center;
        `
      : null}
`;
export const Paragraph = styled.p<{ primary?: boolean }>`
  color: grey;
  margin-top: 0px;
  margin-bottom: 22.5px;

  ${(props) =>
    props.primary &&
    css`
      color: white;
    `}
`;
export const FlexDiv = styled.div`
  display: flex;
`;
export const Button = styled.button`
  width: 100px;
  margin-right: 10px;
`;
