import styled, { css } from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items:center;
    position: static;
`

/* ------------------PRIMER ESTADO--------------------------- */

export const First = styled.div`
    background-color: #FFB7FF;
    border-radius: 10px 0 0 10px;
    width: 7vw;
    height: 4vw;
    z-index: 30;
    display:flex;
    align-items:center;
    padding-left: 1vw;
`
export const TriangleOne = styled.div`
    width: 0; 
    height: 0; 
    border-left: 2vw solid #FFB7FF;
    border-top: 2vw solid transparent;
    border-bottom: 2vw solid transparent;
    z-index: 30;
`
export const FirstB = styled.div`
    background-color: #757577;
    border-radius: 10px 0 0 10px;
    width: 7vw;
    height: 4vw;
    z-index: 30;
    display:flex;
    align-items:center;
`
export const TriangleOneB = styled.div`
    width: 0; 
    height: 0; 
    border-left: 2vw solid #757577;
    border-top: 2vw solid transparent;
    border-bottom: 2vw solid transparent;
    z-index: 30;
`

/* ------------------SEGUNDO ESTADO--------------------------- */

export const Second = styled.div`
background-color:#EF5DA8;
display:flex;
padding-left: 2.7vw;
align-items:center;
width: 8vw;
height: 4vw;
z-index: 20;
position: relative;
left: -2vw;
`
export const P2=styled.p`
    font-family: ${p=> p.theme.colors.typography.poppins};
    font-size: 1vw;
    font-weight: 600;
    color: #FFFFFF;
`
export const TriangleTwo = styled.div`
    width: 0; 
    height: 0; 
    border-left: 2vw solid #EF5DA8;
    border-top: 2vw solid transparent;
    border-bottom: 2vw solid transparent;
    z-index: 20;
    position: relative;
    left: -2vw;
`
export const SecondB = styled.div`
background-color:#BBBABC;
display:flex;
padding-left: 2.7vw;
align-items:center;
width: 8vw;
height: 4vw;
z-index: 20;
position: relative;
left: -2vw;
`

export const TriangleTwoB = styled.div`
    width: 0; 
    height: 0; 
    border-left: 2vw solid #BBBABC;
    border-top: 2vw solid transparent;
    border-bottom: 2vw solid transparent;
    z-index: 20;
    position: relative;
    left: -2vw;
`

/* ------------------TERCER ESTADO--------------------------- */

export const Third = styled.div`
    background-color: #9DD6FD;
    display:flex;
    padding-left: 2.7vw;
    align-items:center;
    width: 8vw;
    height: 4vw;
    z-index: 10;
    position: relative;
    left: -4vw;
`
export const P=styled.p`
    font-family: ${p=> p.theme.colors.typography.poppins};
    font-size: 1vw;
    font-weight: 600;
    color: ${props=> props.theme.colors.typography.dark};
`

export const TriangleThree = styled.div`
    width: 0; 
    height: 0; 
    border-left: 2vw solid #9DD6FD;
    border-top: 2vw solid transparent;
    border-bottom: 2vw solid transparent;
    z-index: 10;
    position: relative;
    left: -4vw;
`

export const ThirdB = styled.div`
    background-color: #DAD9DB;
    display:flex;
    padding-left: 2.7vw;
    align-items:center;
    width: 8vw;
    height: 4vw;
    z-index: 10;
    position: relative;
    left: -4vw;
`

export const TriangleThreeB = styled.div`
    width: 0; 
    height: 0; 
    border-left: 2vw solid #DAD9DB;
    border-top: 2vw solid transparent;
    border-bottom: 2vw solid transparent;
    z-index: 10;
    position: relative;
    left: -4vw;
`

/* ------------------BUTTON--------------------------- */

export const Button= styled.div`
    width: 10vw;
    height: 4vw;
    background-color: #EF5DA8;
    border-radius: 10px;
    text-align: center;
    line-height: 4vw;
    color: #FFFFFF;
    font-family: ${p=> p.theme.colors.typography.poppins};
    font-size: 1vw;
    cursor: pointer;
`

export const Button2= styled.div`
width: 10vw;
height: 4vw;
background-color: #757577;
border-radius: 10px;
text-align: center;
line-height: 4vw;
color: #FFFFFF;
font-family: ${p=> p.theme.colors.typography.poppins};
font-size: 1vw;
`