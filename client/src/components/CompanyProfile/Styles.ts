import styled from "styled-components";

export const MainDiv = styled.div`
    margin: 20px 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PresentationCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`

export const Logo = styled.img`
    width: 300px;
    height: 300px;
    text-align: center;
    object-fit: cover;
    color: transparent;
    text-indent: 10000px;
    border-radius: 50%;
    margin-right: 3.5rem;
`
export const CompanyInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const CompanyName = styled.h1`
    font-size: 5rem;
    color: #757577;
    `
export const Location = styled.h5`
    color: #757577;

`
export const RatingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`

export const Rating = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
`
export const FollowButton = styled.button`
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
export const PaginateButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
`

export const PaginateButtons = styled.div`
    width: auto;
    padding: 20px 20px;
    border-radius: 4px;
    background: #FFB7FF;
    color: #FEFEFF;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 5rem;
    border: none;
    cursor: pointer;
    transition-duration: 0.5s;
    :hover  {
        background: #9DD6FD;
        transform: scale(1.01, 1.01);
        transition-duration: 0.5s;
    }
`

export const AboutCompanyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
    margin-top: 5rem;
`

export const AboutTitle = styled.h1`
    font-family: Poppins;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
    color: #757577;
`
export const SubTitle = styled.h2`
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #757577;
    margin-top: -5px;
`

export const SubTags = styled.h2`
    font-family: Poppins;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #EF5DA8;

`

export const AboutParagraph = styled.p`
    font-family: Open Sans;
    margin-top: 0.5rem;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #444444;
`

export const RatingContaier = styled.div`
    height: 565px;
    width: 100%;
    border-radius: 13px;
    box-shadow: 0px 0px 27px -2px #00000040;
    background: #FFFFFF;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const UserRateContainer = styled.div`
    height: 500px;
    width: 550px;
    background: transparent;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RatingCompContainer = styled.div`
    display: flex;
    width: 100%;
`

export const RatingTitle = styled.h1`
    font-family: Poppins;
    font-size: 33px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: #757577;
`
export const UserRatingTitle = styled.h1`
    font-family: Poppins;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
    color: #757577;
    margin: 30px 0;
`
export const UserRatingText = styled.p`
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
    color: #757577;
    `
export const RatingPercentage = styled.i`
    font-family: Poppins;
    font-size: 75px;
    font-style: normal;
    font-weight: 700;
    line-height: 112px;
    letter-spacing: 0em;
    text-align: left;
    color: #C879FF;
    transition: 200ms;
    // color: #8f8f8f
`
