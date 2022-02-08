import styled from "styled-components";
import backgroundImg from "../../assets/two_people.jpg";

let white = "white";
let boxShadow = "box-shadow: 4px 4px 12px 6px rgba(93, 95, 239, 0.1);";
let inputPlaceholderColor = "#AFB0E9";
let cardRadius = "30px";

export const MainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 89px);
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const FormContainer = styled.div`
    background: ${white};
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 30px;
    ${boxShadow};
    border-radius: ${cardRadius};
    z-index: 3;
`;
export const BackgroundDiv = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: 50% 0%;
    z-index: 0;
`;

export const BackgroundCover = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
`;
export const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 1rem;
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    font-family: ${(props) => props.theme.colors.typography.poppins};
    font-weight: 600;
    text-align: center;
    margin: 20px 0;
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    font-family: ${(props) => props.theme.colors.typography.openSans};
    color: ${(props) => props.theme.colors.typography.darkest};
    ::placeholder {
        color: ${inputPlaceholderColor};
    }
    border-radius: 0.5rem;
    border: 0.5px solid ${(props) => props.theme.colors.backgrounds.base};
    :focus {
        outline: none;
    }
`;
export const StyledButton = styled.button`
    width: 50%;
    border-radius: 0.5rem;
    padding: 0.7rem 2rem;
    margin-top: 1rem;
    font-size: 1rem;
    font-family: ${(props) => props.theme.colors.typography.openSans};
    color: ${(props) => props.theme.colors.backgrounds.white};
    background: ${(props) => props.theme.colors.details.primary};
    text-align: center;
    border: none;
    transition: 0.5s;
    cursor: pointer;
`;

export const GoogleBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #4285f4;
    width: 50%;
    border-radius: 0.5rem;
    padding: 0.7rem;
    font-size: 1rem;
    font-family: ${(props) => props.theme.colors.typography.openSans};
    color: ${(props) => props.theme.colors.backgrounds.white};
    border: none;
    transition: 0.5s;
    cursor: pointer;
`;

export const GoogleLogo = styled.img`
    width: 20px;
    height: auto;
`;

export const RegisterSelect = styled.select`
    padding: 0.7rem 1rem;
    font-size: 1rem;
    font-family: ${(props) => props.theme.colors.typography.openSans};
    width: 100%;
    background: ${(props) => props.theme.colors.backgrounds.base};
    border-radius: 0.5rem;
    border: 0.5px solid ${(props) => props.theme.colors.backgrounds.base};
    ::placeholder {
        color: gray;
    }
    color: ${(props) => props.theme.colors.typography.darkest};
    :focus {
        background: ${(props) => props.theme.colors.typography.dark};
        color: ${(props) => props.theme.colors.backgrounds.white};
        outline: none;
    }
`;
