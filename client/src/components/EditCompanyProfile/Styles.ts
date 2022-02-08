import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 2rem;
    align-items: start;
    padding: 2rem 1.5rem;
    border-radius: 1rem;
    border: 0.5px solid ${(props) => props.theme.colors.backgrounds.base};
    //box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const CardHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const CardTitle = styled.h2`
    width: 100%;
    font-size: 1.7rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.typography.light};
`;
export const EditButton = styled.button`
    font-weight: bold;
    font-size: 1.2rem;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.colors.backgrounds.pink};
    :hover {
        font-weight: bold;
        color: ${(props) => props.theme.colors.details.secondary2};
        transform: scale(1.01, 1.01);
        transition-duration: 0.5s;
    }
`;
export const CardContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Logo = styled.img`
    width: 155px;
    height: 155px;
    text-align: center;
    object-fit: cover;
    color: transparent;
    border-radius: 1rem;
`;
export const CompanyInfo = styled.div`
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`;

export const InputGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.theme.colors.typography.darkest};
    gap: 0.5rem;
`;
export const CustomLabel = styled.label`
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
`;
export const Input = styled.input`
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    font-family: ${(props) => props.theme.colors.typography.openSans};
    color: ${(props) => props.theme.colors.typography.darkest};
    border-radius: 0.5rem;
    border-radius: 0.5rem;
    border: 0.5px solid ${(props) => props.theme.colors.backgrounds.base};
`;
export const TextArea = styled.textarea`
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    font-family: ${(props) => props.theme.colors.typography.openSans};
    color: ${(props) => props.theme.colors.typography.darkest};
    border-radius: 0.5rem;
    border: 0.5px solid ${(props) => props.theme.colors.backgrounds.base};
`;
export const RatingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Rating = styled.div`
    display: flex;
    flex-direction: row;
`;
export const Button = styled.button`
    width: 120px;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.colors.backgrounds.pink};
    color: ${(props) => props.theme.colors.backgrounds.white};
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: auto;
    letter-spacing: 0em;
    text-align: center;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    transition-duration: 0.5s;
    :hover {
        background: ${(props) => props.theme.colors.backgrounds.pink};
        transform: scale(1.01, 1.01);
        transition-duration: 0.5s;
    }
`;
export const FollowButton = styled.button`
    width: 237.77px;
    height: 63.13px;
    border-radius: 4px;
    background: #ef5da8;
    color: #fefeff;
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
    :hover {
        background: #ef419b;
        transform: scale(1.01, 1.01);
        transition-duration: 0.5s;
    }
`;
export const PaginateButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
`;

export const PaginateButtons = styled.div`
    width: auto;
    padding: 10px 20px;
    border-radius: 4px;
    background: #ffb7ff;
    color: #fefeff;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 5rem;
    border: none;
    cursor: pointer;
    transition-duration: 0.5s;
    :hover {
        background: #9dd6fd;
        transform: scale(1.01, 1.01);
        transition-duration: 0.5s;
    }
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    gap: 1rem;
`;
export const SubTags = styled.p`
    font-family: Poppins;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: auto;
    letter-spacing: 0em;
    color: ${(props) => props.theme.colors.backgrounds.white};
    background: ${(props) => props.theme.colors.details.secondary2};
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    :hover {
        background: ${(props) => props.theme.colors.backgrounds.pink};
    }
`;
