import styled, { css } from "styled-components";

export const WelcomeContainer = styled.div`
  margin: auto;
  width: 98vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 100vw;
  margin-left: 170px;
  margin-top:6vw;
  margin-bottom: 13vw;
  background: rgba(0,0,0,0);
`;

export const CategorySecOut = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
export const CategorySecTitle = styled.div`
  width: 80vw;
`;
export const CategorySec = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top:70px;
  gap: 1.5rem;
  width: 80vw;
  background-color: rgba(0,0,0,0);
`;

export const TitleB = styled.h5`
font-size: 45px;
color: #757577;
`;

export const SubTitle = styled.h5`
font-size: 20px;
color: #757577;
margin-top: 10px;
margin-bottom: 10px;
`;

export const Image = styled.img`
position: absolute;
height: 180px;
top: 0;
left: 0;
z-index: -998;
width: 100%;
height: auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.typography.dark};
  font-weight: bolder;
  font-family: ${props => props.theme.colors.typography.poppins};
  font-size: 6vw;
  display: flex;
  flex-wrap: wrap;
  line-height: 5vw;
  margin-bottom: 30px;
  margin-top: 40px;
`;

export const HL = styled.p`
  color: ${props => props.theme.colors.details.primary};
  margin: 0;
`;

export const Paragraph = styled.h5<{ bold?: boolean }>`
  color: grey;
  font-size: 1.5vw;
  margin-top: 0px;
  margin-bottom: 22.5px;
  font-weight: normal;

  ${(props: any) => 
    props.bold && (css`font-weight: bolder;`)
  }
`;

export const Section2 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 1000px;
  margin-top:50px;
  margin-bottom: 70px;
  background: rgba(0,0,0,0);
`;

export const Section3 = styled.section`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;
  width: 1000px;
  margin-top:50px;
  margin-bottom: 70px;
  background: rgba(0,0,0,0);
`;

export const IMG = styled.img`
  width: 400px;
  margin: 0;
`;

export const Footer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  position: static;
  width: 112px;
  height: 42px;
  left: 0px;
  top: 250.62px;
  background: lightblue;
  border: none;
  color: white;
  margin-left: 2px;
  border-radius: 10px;
  box-shadow: 4px 4px 12px 5px rgba(93, 95, 239, 0.1);

  font-family: ${(props) => props.theme.colors.typography.light};
`;