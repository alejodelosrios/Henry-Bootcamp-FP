import styled from "styled-components";
import backgroundImg from '../../assets/two_people.jpg';

let primary = '#EF5DA8';
let secondary1 = '#9DD6FD';
let secondary2 = '#9DD6FD'; //input border
let secondary3 = '#C879FF'; //btn 
let white = 'white';
let cards = '#E3E7E8';
let base = '#F0F1F5';
let backgroudColor = '#F9F9F9';
let text1 = '#757577';
let text2 = '#7A7380';
let text3 = '#BBBABC';
let text4 = '#F5F5F5';
let boxShadow = 'box-shadow: 4px 4px 12px 6px rgba(93, 95, 239, 0.1);';
let inputBackground = '#FFB7FF10';
let inputPlaceholderColor = '#AFB0E9';
let cardRadius = '30px';



export const MainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    ::-webkit-scrollbar {
        display: none;
    }
`

export const FormContainer = styled.div`
    margin-left: 18%;
    margin-bottom: 20%;
    background: ${white};
    width: 400px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 30px 50px 30px;
    ${boxShadow};
    border-radius: ${cardRadius};
    z-index: 3;
    
`
export const BackgroundDiv = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 1000px;
    background-image: url(${backgroundImg});    
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: left top;
    z-index: 0;
        
`

export const BackgroundCover = styled.div`
    width: 55vw;
    height: 1100px;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(249,249,249,1) 14%);    
    z-index: 1;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
`

export const Title = styled.h1`
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: -0.02em;
    text-align: center;
    margin: 20px 0;
`

export const StyledInput = styled.input`
    border: 1px solid ${secondary2};
    background: ${inputBackground};
    width: 306px;
    height: 50px;
    padding: 10px;
    ::placeholder {
        color: ${inputPlaceholderColor}
    }
    border-radius: 3px;
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    margin-bottom: 1rem;
    :focus {
        outline: none;
    }
`
export const StyledButton = styled.button`
    background: ${secondary3};
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.10000000149011612px;
    text-align: center;
    height: 42px;
    width: 100%;
    border-radius: 2px;
    padding: 10px, 30px, 10px, 30px;
    border: none;
    box-shadow: 4px 4px 12px 5px #F178B61A;
    margin-top: 1rem;
    color: ${white};
    transition: 0.5s;
    cursor: pointer;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const GoogleBtn = styled.button`
    background: #4285f4;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    height: 42px;
    width: 306px;
    border-radius: 2px;
    padding: 2px 2px;
    border: none;
    box-shadow: 4px 4px 12px 5px #F178B61A;
    margin-top: 1rem;
    color: ${white};
    transition: 0.5s;
    cursor: pointer;
`

export const GoogleLogo = styled.img`
    width: 20px;
    height: auto;
`

export const RegisterSelect = styled.select`
    font-size: 16px;
    max-height: 41px;
    padding: 10px;
    width: 100%;
    background: #ffb7ff1a;
    border-radius: 2px;
    border: 1px solid #ffb7ff;
    ::placeholder {
        color: gray;
    };
    color: #444444;
    :focus {
        background: #ffb7ff30;
        outline: none
    };
`

