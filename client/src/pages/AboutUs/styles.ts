import styled, { css } from "styled-components";

export const AboutCont = styled.div`
  margin: auto;
  width: 98vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Title = styled.h1`
    color: #FFFFFF;
    font-size: 6vw;
    margin-top: 6vw;
    `
export const TL = styled.span`
    color: #EF5DA8;
    font-size: 6vw;
    margin-top: 6vw;
    `

export const SubTitle = styled.h3`
    color: #EF5DA8;
    font-size: 2vw;
    margin-bottom: 2vw;
    margin-top:3vw;
`
export const AsideTitle = styled.h3`
    color: #EF5DA8;
    font-size: 2vw;
    margin-bottom: 2vw;
    margin-top:3vw;
`
export const MiniTitle = styled.h3`
    color: ${props=> props.theme.colors.typography.dark};
    font-size: 1vw;
    text-align: right;
`

export const Div = styled.div`
    width: 50%;
`

export const Header = styled.div`
    width: 100vw;
    height: 23vw;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    z-index: -10;
    position: absolute;
    top: 0;
`

export const Img = styled.img`
    width: 100vw;
    height: auto;
`
export const ImgTwo = styled.img`
    width: 80%;
    height: auto;
`

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    margin: 8% 0;
    margin-bottom: 3%;
`

export const Description = styled.div`
    text-align: left;
    color: ${props=> props.theme.colors.typography.dark};
    font-family: ${p=> p.theme.colors.typography.poppins};
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
z-index:-1;
color: #FFFFFF;
top: -30px;
left: -20px;
`

export const Aside = styled.div`
    width: 30%;
    padding: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    background-color:rgba(200, 121, 255, 0.1);
    border-radius: 15px;
    z-index: -10;
`

export const DivBot = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
width: 80%;
margin: 5% 0;
`

export const Card = styled.div`
    display:flex;
    background-color:rgba(200, 121, 255, 0.1);
    border-radius: 15px;
    justify-content: space-evenly;
    padding: 20px;
    margin: 10px;
    width: 400px;
    height: 200px;
    align-items: center;
`
export const TeamImg = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 30px;
`

export const CardTitle = styled.h2`
    color: #EF5DA8;
    margin: 5% 0;
`
export const CardSubTitle = styled.h3`
    color: #757577;
    margin: 2% 0;
`
export const CardMiniTitle = styled.h4`
    color: #757577;
    margin: 1% 0;
`

export const Foot = styled.div`
    background-color: #FED2FF;
    width: 100vw;
    height: 30vw;
`