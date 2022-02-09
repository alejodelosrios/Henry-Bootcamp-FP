import { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import facebook from '../assets/Facebook.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/Youtube.svg'
import { suscrNewsLetter } from "../redux/actions/public/generalActions";

const Container = styled.div`
    margin: auto;
    margin-top: 150px;
    width: 80vw;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(200, 121, 255, 0.1);
    border-radius: 20px 20px 0px 0px;
    padding-top: 20px;
`;
const ContainerSup = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: relative;
    width: 70%;
`;
const ContainerInf = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
`;
const Logos = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 200px;
    
`;
const NewsLetter = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
padding: 30px 24px;

position: relative;
width: 437px;
height: 300px;
top: -120px;

background: #FFFFFF;
border-radius: 20px;
box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.73);
  div{
      display: flex;
      align-items: center;
  }
`
const DivDerecha = styled.div`
display: flex;
justify-content: space-evenly;
`
const Listas = styled.div`
display: flex;
flex-direction: column;
margin: 20px;
`
const LastContainer = styled.div`
display:flex;
align-items: baseline;
justify-content: space-between;
width: 100%;
padding: 20px;
`
const Titulo1 = styled.div`
font-weight: bold;
font-size: 24px;
line-height: 36px;
color: #757577;
`
const Texto1 = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
color: #BBBABC
`

const Input = styled.input`
width: 306px;
  height: 42px;
  border-radius: 15px;
  border: 1px solid #ffb7ff;
  background: #ffb7ff1a;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.04em;
  text-align: left;
  padding-left: 1rem;
  ::placeholder {
    color: #afb0e9;
  }
  :focus {
    background: #ffb7ff30;
    outline: none;
  }
`
const Button = styled.button`
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
  cursor: pointer;
  box-shadow: 4px 4px 12px 5px rgba(93, 95, 239, 0.1);

  font-family: ${(props) => props.theme.colors.typography.light};
  &:hover{
    background: #99c8d8;
  }
`
const Msg = styled.p<{suscr:boolean}>`
    margin-left: 10px;
    color: #2e8b2e;
    font-size: 16px;
    font-family: ${p => p.theme.colors.typography.poppins};

    ${props => !props.suscr &&
        (css `
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s 2s, opacity 2s linear;`)
    }
`
const Titulo2 = styled.div`
font-weight: bold;
font-size: 20px;
line-height: 36px;
color: #EF5DA8;
margin-top: 50px;
`

const Button2 = styled.button`
  color: #757577;
  background:none;
  border:none;
  text-align: left;
  margin-bottom: 10px;
  margin-top:10px;

  font-family: ${(props) => props.theme.colors.typography.light};
`
const LittleCont = styled.div`
display: flex;
justify-content: space-evenly;
width: 200px;
`
const Text3 = styled.p`
font-weight: bold;
font-size: 15px;
line-height: 20px;
color: #757577
`
const Img = styled.img`
border-radius: 10px;
width: 40px;
height: 40px;
box-shadow: 4px 4px 12px 5px rgba(93, 95, 239, 0.1);
`


const Footer = () => {
    const dispatch = useDispatch();
    const [suscr, setSuscr] = useState(false);
    const [mail, setMail] = useState('');

    const handleMail = (e:any)=>{
        setMail(e.target.value);
    }

    const handleSubs = ()=>{
        if(mail.length > 3 && mail.includes("@")) {
            dispatch(suscrNewsLetter(mail));
            setMail('');
            setSuscr(true);
            setTimeout(()=>setSuscr(false),1000);
        }
    }

    return (
        <Container>
            <ContainerSup>
                <NewsLetter>
                    <Titulo1>Newsletter</Titulo1>
                    <Texto1>Subscribite para obtener todas las novedades, alertas de puestos de trabajo nuevos, capacitaciones y toda la info de nuestra App!</Texto1>
                    <Input 
                        type="email" 
                        placeholder="Suscribete con tu email"
                        value={mail}
                        onChange={(e)=>handleMail(e)}/>
                    <div>
                    <Button onClick={handleSubs}>Enviar</Button>
                    <Msg suscr={suscr}>Suscripción realizada</Msg>
                    </div>
                </NewsLetter>
                <DivDerecha>
                    <Listas>
                        <Titulo2>Contactanos</Titulo2>
                        <Button2>About Us</Button2>
                        <Button2>Carees</Button2>
                        <Button2>Press Released</Button2>
                        <Button2>Blog</Button2>
                    </Listas>
                    <Listas>
                        <Titulo2>Cuenta</Titulo2>
                        <Button2>Tu Cuenta</Button2>
                        <Button2>Returns Centre</Button2>
                        <Button2>100 % purchase protection</Button2>
                        <Button2>ayuda</Button2>
                    </Listas>
                </DivDerecha>
            </ContainerSup>
            <ContainerInf>
                <Logos>
                    <a href="https://www.facebook.com/" target="_blank">
                        <Img src={facebook} alt="red Social" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <Img src={instagram} alt="red Social" />
                    </a>
                    <a href="https://www.youtube.com/watch?v=wV1FrqwZyKw&ab_channel=LadyGagaVEVO" target="_blank">
                        <Img src={youtube} alt="red Social" />
                    </a>
                </Logos>
                <LastContainer>
                    <Text3>Copyright © 2021 jobsportal.com</Text3>
                    <LittleCont>
                        <Button2>Privacy policy</Button2>
                        <Button2>-</Button2>
                        <Button2>Cookies</Button2>
                    </LittleCont>
                </LastContainer>
            </ContainerInf>
        </Container>)
};

export default Footer