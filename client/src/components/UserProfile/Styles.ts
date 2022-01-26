import styled from "styled-components";

export const MainDiv = styled.div`
    margin: 20px 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContactCard = styled.div`
    display: flex;
    background: #FFFFFF;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    border-radius: 12.96px;
    padding: 20px 40px 30px 40px;
    box-shadow: 0px 0px 27px -2px #00000040;
    margin-top: 4rem;
`
export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    `

export const EachContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const Experience = styled.div`
    display: flex;
    margin-top: 2rem;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 12.96px;
    padding: 20px 40px 30px 40px;
    box-shadow: 0px 0px 27px -2px #00000040;
    margin-top: 4rem;
    `

export const ExperienceCard = styled.div`
    width: 45%;
    height: 100%;
    border-radius: 10px;
    padding: 15px;
    margin: 10px 5px;
    display: flex;
    background: #FFFFFF;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12.96px;
    padding: 20px 40px 30px 40px;
    box-shadow: 0px 0px 27px -2px #00000040;
`
export const NoExperience = styled.div`
    display: flex;
    width: 45%;
    height: 160px;
    background: #dedede;
    border-radius: 10px;
    padding: 15px;
    margin: 10px 5px;
    align-items: center;
    justify-content: center;
`
export const NoLanguages = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    background: #dedede;
    border-radius: 10px;
    padding: 15px;
    margin: 10px 5px;
    align-items: center;
    justify-content: center;
`

export const Education = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 12.96px;
    padding: 20px 40px 30px 40px;
    box-shadow: 0px 0px 27px -2px #00000040;
    margin: 10px 5px;
    margin-top: 4rem;
`

export const EducationCard = styled.div`
    width: 45%;
    height: 100%;
    padding: 15px;
    margin: 10px 5px;
    display: flex;
    background: #FFFFFF;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12.96px;
    padding: 20px 40px 30px 40px;
    box-shadow: 0px 0px 27px -2px #00000040;
`

export const Languages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`

export const LanguageCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 15px;
    margin: 10px 5px;
    display: flex;
    background: #FFFFFF;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12.96px;
    padding: 20px 40px 30px 40px;
    box-shadow: 0px 0px 27px -2px #00000040;
`

export const Titles = styled.h3`
    font-family: Poppins;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
    color: #EF5DA8;    
`

export const SubTitles = styled.h4`
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #444444;
    min-width: 130px;
    margin-bottom: 5px;
    margin-right: 30px;
`
export const ParagraphStyle = styled.p`
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #444444;
`


export const EditInput = styled.input`
    margin-bottom: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: auto;
    padding: 10px;
    margin-right: 10px;
    outline: none;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #444444;
    border-radius: 15px;
    border: 1px solid #ffb7ff;
    background: #ffb7ff1a;
    ::placeholder {
        color: #afb0e9;
    }
    :focus {
        background: #ffb7ff30;
        outline: none;
`
export const DateInput = styled.input`
    margin-bottom: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: auto;
    padding: 10px;
    margin-right: 10px;
    outline: none;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #444444;
    border-radius: 15px;
    border: 1px solid #ffb7ff;
    background: #ffb7ff1a;
    ::placeholder {
        color: #afb0e9;
    }
    :focus {
        background: #ffb7ff30;
        outline: none;
`


export const EditTextArea = styled.textarea`
    margin-bottom: 10px;
    width: 100%;
    min-height: 140px;
    padding: 10px;
    margin-right: 10px;
    outline: none;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #444444;
    border-radius: 15px;
    border: 1px solid #ffb7ff;
    background: #ffb7ff1a;
    ::placeholder {
        color: #afb0e9;
    }
    :focus {
        background: #ffb7ff30;
        outline: none;
`

export const Edit = styled.button`
    border: none;
    color: #EF5DA8;
    cursor: pointer;
    font-size: 1rem;
    background: transparent;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    padding-right: 50px;
    :hover{
        color: #ff0083;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1px;
    width: 100%;
    margin-bottom: 1rem;
`

export const EachLang = styled.div`
    padding: 5px;
`
export const NameDiv = styled.div`
    width: 100%;
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #757577;
`

export const NameTag = styled.h1`
    font-family: Poppins;
    font-size: 99px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
`

export const RolTag = styled.h5`
    margin-left: 3.8px;
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 120px;
    letter-spacing: 0em;
    text-align: left;
`

export const ContactButton = styled.button`
    width: 237.77px;
    height: 63.13px;
    border-radius: 4px;
    background: #EF5DA8;
    color: #FEFEFF;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    border: none;
    cursor: pointer;
    transition-duration: 0.5s;
    margin-left: 3.8px;
    :hover  {
        background: #ef419b;
        transform: scale(1.01, 1.01);
        transition-duration: 0.5s;
    }
`

export const FlexEndDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`



