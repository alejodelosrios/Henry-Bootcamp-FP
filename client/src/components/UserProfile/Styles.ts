import styled from "styled-components";

let secondary3 = '#C879FF';
let primary = '#EF5DA8';
let primaryHover = '#ef419b';
let cardBackgroundColor = '#FFFFFF';
let noCardBackgroundColor = '#f0f0f0';
let textGray = '#444444';
let inputBackground = 'background: #ffb7ff1a';
let inputBorders = 'border: 1px solid #ffb7ff';
let inputFocus = `:focus {
    background: #ffb7ff30;
    outline: none}`;
let editButtonText = '#EF5DA8';
let editButtonTextHover = '#ff0083';
let headerNameColor = '#757577';
let buttonTextColor = '#FEFEFF';
let boxShadow = 'box-shadow: 0px 0px 27px -2px #00000040';
let cardBorderRadius = 'border-radius: 13px';
let inputBorderRadius = 'border-radius: 15px';
let buttonBorderRadius = 'border-radius: 4px';
let buttonHover = `:hover  {
    background: ${primaryHover};
    transform: scale(1.01, 1.01);
    transition-duration: 0.5s;
}`;
let inputPlaceholder = `::placeholder {
    color: gray;
}`;
let buttonDefault = `
    background: ${primary};
    color: ${buttonTextColor};
    cursor: pointer;
    text-align: center;
    transition-duration: 0.5s;
    ${buttonHover};
    ${buttonBorderRadius};
    ${buttonTextColor};
    border: none;
`

let inputDefault = `
    ${inputBackground};
    ${inputBorderRadius};
    ${inputBorders};
    ${inputPlaceholder};
    color: ${textGray};
    ${inputFocus};
`



export const MainDiv = styled.div`
    margin: 20px 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContactCard = styled.div`
    display: flex;
    background: ${cardBackgroundColor};
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    ${cardBorderRadius};
    padding: 20px 40px 30px 40px;
    ${boxShadow};
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
    background: ${cardBackgroundColor};
    ${cardBorderRadius};
    padding: 20px 40px 30px 40px;
    ${boxShadow};
    margin-top: 4rem;
    `

export const ExperienceCard = styled.div`
    width: 45%;
    height: 100%;
    padding: 15px;
    margin: 10px 5px;
    display: flex;
    background: ${cardBackgroundColor};
    flex-direction: column;
    align-items: flex-start;
    ${cardBorderRadius};
    padding: 20px 40px 30px 40px;
    ${boxShadow};
`
export const NoExperience = styled.div`
    display: flex;
    width: 45%;
    height: 160px;
    background: ${noCardBackgroundColor};
    ${cardBorderRadius};
    padding: 15px;
    margin: 10px 5px;
    align-items: center;
    justify-content: center;
`
export const NoLanguages = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    background: ${noCardBackgroundColor};
    ${cardBorderRadius};
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
    ${cardBorderRadius};
    padding: 20px 40px 30px 40px;
    ${boxShadow};
    margin: 10px 5px;
    margin-top: 4rem;
`

export const EducationCard = styled.div`
    width: 45%;
    height: 100%;
    padding: 15px;
    margin: 10px 5px;
    display: flex;
    background: ${cardBackgroundColor};
    flex-direction: column;
    align-items: flex-start;
    ${cardBorderRadius};
    padding: 20px 40px 30px 40px;
    ${boxShadow};
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
    background: ${cardBackgroundColor};
    flex-direction: column;
    align-items: flex-start;
    ${cardBorderRadius};
    padding: 20px 40px 30px 40px;
    ${boxShadow};
`

export const Titles = styled.h3`
    font-family: Poppins;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
    color: ${primary};    
`

export const SubTitles = styled.h4`
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: ${textGray};
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
    color: ${textGray};
`


export const EditInput = styled.input`
    margin-bottom: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: auto;
    margin-right: 10px;
    padding: 10px;
    outline: none;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;   
    ${inputDefault};
`
export const DateInput = styled.input`
    margin-bottom: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: auto;
    margin-right: 10px;
    padding: 10px;
    outline: none;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;   
    ${inputDefault};
`


export const EditTextArea = styled.textarea`
    margin-bottom: 10px;
    width: 100%;
    min-height: 140px;
    margin-right: 10px;
    padding: 10px;
    outline: none;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    ${inputDefault};
`

export const Edit = styled.button`
    border: none;
    color: ${editButtonText};
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
        color: ${editButtonTextHover};
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
    color: ${headerNameColor};
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
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    margin-left: 3.8px;
    ${buttonDefault};
`

export const FlexEndDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`

export const SkillTags = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    ${cardBorderRadius};
    padding: 20px 40px 30px 40px;
    ${boxShadow};
    margin: 10px 5px;
    margin-top: 4rem;
    justify-content: center;
`

export const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    align-items: center;
    text-align: center;    
    flex-wrap: wrap;
`

export const Tag = styled.h5`
    ${buttonDefault};
    font-size: 20px;
    padding: 5px 7px;
    border-radius: 15px 15px 0px 15px;
    :hover{
        background: ${secondary3};
    }
    margin: 10px 10px;
    user-select: none;
    background: #7068ff;
`

export const TagInput = styled.input`
    ${inputDefault}
    font-size: 16px;
    width: 70%;
    padding: 10px;
    border-radius: 15px 0 0 15px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    
`

export const AddTagBtn = styled.button`
    ${buttonDefault}
    max-height: 40px;
    padding: 11px;
    padding-left: 3px;
    font-size: 16px;
    border-radius: 0 15px 15px 0;
    width: 30%;
`

export const LangTagsBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const TagsSelect = styled.select`
    ${inputDefault}
    font-size: 16px;
    max-height: 41px;
    padding: 10px;
    width: 100%;

`



