import styled, { css } from "styled-components";

export const ContenedorA = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  width: 100%;
  height: 11vw;
  margin-bottom: 3vw;
  justify-content: space-between;
  box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.73);
`;

export const ContenedorB = styled.div`
  display: flex;
  margin: 20px;
  margin-bottom: 0px;
  justify-content: left;
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 12vw;
  height: 5vw;
  overflow: hidden;
  border-radius: 0.3vw;
  margin: 0.5vw;
  margin-bottom: 3px;
  margin-right: 1.4vw;
  vertical-align: middle;
  align-items: center;
`;

export const Img = styled.img`
  object-fit: cover;
  object-position: center;
  width: 8vw;
  height: auto;
`;

export const ContenedorB2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
export const ContenedorC = styled.div`
  display: flex;
  padding: 0px;
  justify-content: space-evenly;
  flex-direction: column;
  width: 458px;
  height: 76px;
  margin-right: 10px;
`;
export const ContenedorF = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 15px 15px;
  padding: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fff8ff;
`;
export const Title = styled.h4`
  margin: 0px;
  font-size: 1.7rem;
  font-weight: 30px;
  color: #757577;
`;
export const P = styled.p`
  font-size: 1.3rem;
  color: #757577;
`;
export const P3 = styled.p`
  font-size: 1.1rem;
  color: #ef5da8;
`;

export const Modal = styled.div``;
export const Overlay = styled.div``;
