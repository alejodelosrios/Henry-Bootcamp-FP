import styled, { css } from "styled-components";

export const AboutCont = styled.div`
  margin: auto;
  width: 98vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 4%;
`

export const Logo = styled.img`
    width: 90%;
`

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    margin: 10% 0;
`

export const Description = styled.div`
    width: 50%;
    text-align: left;
    color: ${props=> props.theme.colors.typography.dark};
    font-family: ${p=> p.theme.colors.typography.poppins};

`

export const Aside = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const Graphic = styled.img`
    width: 90%;
    margin: 10% 0;
`

export const Info = styled.div`
    text-align: right;
    color: ${props=> props.theme.colors.typography.dark};
    font-family: ${p=> p.theme.colors.typography.poppins};
`

export const Foot = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${p => p.theme.colors.backgrounds.cards};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 5%;
`

export const Us = styled.img`
    background-color: white;
    border-radius: 50%;
    border: solid 3px ${p=> p.theme.colors.backgrounds.cards};
    width: 80px;
    height: 80px;
`