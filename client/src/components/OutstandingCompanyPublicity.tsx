import styled from "styled-components";
import img from '../assets/publicity2.jpg'

const Div = styled.div`
width: 14vw;
height: 25vw;
background-image: url(${img});
background-size: 10vw 30vw;
border-radius: 1vw;
background-size: cover;
display: flex;
flex-direction: column;
justify-content:start;
align-items: center;
text-align: center;
padding: 20px;
margin-top: 1vw;
`

const H1 = styled.h1`
font-size: 1.1vw;
font-family: ${p => p.theme.colors.typography.poppins};
line-height: 1.3vw;
margin-bottom: 1vw;
margin-top: 0.5vw;
color: rgba(239, 93, 168, 0.8);
`

const P = styled.p`
font-size: 1vw;
font-family: ${p => p.theme.colors.typography.poppins};
line-height: 0.9vw;
`
const Button = styled.button`
border: none;
background-color: rgba(239, 93, 168);
font-family:${p => p.theme.colors.typography.poppins};
padding: 10px;
width: 80%;
border-radius: 10px;
color: #FFF;
margin-top: 10vw;
font-size: 1vw;`

const OCPublicity = () =>{
    return(
        <Div>
            <H1>¿CONOCÉS NUESTRO <br/> PREMIUM ACCESS? </H1>
            <P>Buscamos mejorar la experiencia del usuario y el modo en que interactua con nuestra aplicación.</P>
            <Button>Hazte Premium</Button>
        </Div>
    )
};

export default OCPublicity;