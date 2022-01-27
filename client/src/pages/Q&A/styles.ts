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
line-height: 70px;
text-align: center;
align-items: center;
top: 131px;
margin-top: vw;
`

export const PT = styled.p`
  color: ${props => props.theme.colors.details.primary};
  margin-bottom: 30px;;
  text-align: center;
`;

export const MiniTitle = styled.p`
    color: ${props=> props.theme.colors.typography.dark};
    font-size: 1.5vw;
    text-align: center;
    margin: 3.5vw 0;
    font-family: ${p=> p.theme.colors.typography.poppins};
`

export const CardContainer= styled.div`
    display:flex;
    width: 80%;
    justify-content: space-evenly;
`

export const Card= styled.div`
    width: 40%;
    background-color: rgba(200, 121, 255, 0.1);
    border-radius: 15px;
    border: none;
    text-align: center;
    margin-bottom: 3vw;
    padding: 1.5vw;
`
export const CardTitle = styled.h3`
    color: #EF5DA8;
    font-size: 2vw;
    margin-bottom: 2vw;
    margin-top:1vw;
    font-family: ${p=> p.theme.colors.typography.poppins};
`

export const CardItems = styled.button`
    font-family: ${p=> p.theme.colors.typography.poppins};
    color: ${props=> props.theme.colors.typography.dark};
    font-size: 1vw;
    background-color: rgba(0,0,0,0);
    border:none;
    cursor: pointer;
    margin: 1.5vw 0;
`

export const SectionTitle = styled.h2`
    font-family: ${p=> p.theme.colors.typography.poppins};
    font-size: 3vw;
    color: ${props => props.theme.colors.details.primary};
    margin-top: 4vw;
    margin-bottom: 1vw;
`

export const HR= styled.hr`
    margin-top: 20px;
    margin-bottom: 20px;
    border-top: 1px solid #d3d3d3;
    box-sizing: content-box;
    width: 100%;
`
export const Section= styled.div`
    width:100%;
    margin: 2% 0;
`
export const Questions= styled.p`
    font-family: ${p=> p.theme.colors.typography.poppins};
    color: ${props=> props.theme.colors.typography.dark};
    margin-top: 1vw;
    margin-bottom: 1vw;
    font-size: 1.5vw;
`
export const Text=styled.p`
    font-family: ${p=> p.theme.colors.typography.openSans};
    margin-top: 1vw;
    margin-bottom: 3vw;
    font-size: 1.3vw;
`