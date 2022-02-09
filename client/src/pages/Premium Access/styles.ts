import styled, { css } from "styled-components";

export const Container = styled.div`
margin: auto;
width: 98vw;
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
font-size: 4vw;
line-height: 60px;
text-align: center;
align-items: center;
top: 131px;
margin-top: 1vw;
`

export const PT = styled.p`
  color: ${props => props.theme.colors.details.primary};
  margin-bottom: 30px;;
  text-align: center;
`;

export const MiniTitle = styled.p`
    color: ${props => props.theme.colors.typography.dark};
    font-size: 1.5vw;
    text-align: center;
    margin: 3.5vw 0;
    font-family: ${p => p.theme.colors.typography.poppins};
`
export const Div = styled.div`
    width: 50%;
`
export const SubTitle = styled.h2`
    color: #EF5DA8;
    font-size: 2vw;
    margin-bottom: 2vw;
    margin-top:3vw;
`
export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    margin:0;
    margin-bottom: 3%;
`
export const Description = styled.div`
    text-align: left;
    color: ${props => props.theme.colors.typography.dark};
    font-family: ${p => p.theme.colors.typography.poppins};
    font-size: 1vw;
    position: relative;
`
export const SpanPink = styled.span`
    color: #EF5DA8;
    font-weight: bold;
`
export const Span = styled.span`
position: absolute;
font-size: 300px;
line-height: 1;
/* z-index:2; */
color: #FFFFFF;
top: -30px;
left: -20px;
`
export const P = styled.p`
text-align: center;`


export const Aside = styled.div`
    width: 30%;
    padding: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color:rgba(252, 221, 236);
    border-radius: 15px;
    /* z-index: -10; */
   `
export const AsideTitle = styled.h2`
   color: #EF5DA8;
   font-size: 2vw;
   margin-bottom: 2vw;
   margin-top:3vw;
   text-align: center;
`
export const AsideTitlePrice = styled.h2`
   color: #EF5DA8;
   font-size: 3.5vw;
   margin-bottom: 0;
   margin-top:3vw;
   text-align: center;
`
export const MiniTitleAside = styled.h3`
    color: ${props=> props.theme.colors.typography.dark};
    font-size: 1.5vw;
    text-align: center;
    margin-bottom: 0;
`
export const Sup = styled.sup`
    font-size: 1vw;
`
export const Li = styled.li`
padding-inline-start: 1vw;
margin: 0.5vw 0;
::marker {
    color: hotpink;
  }`