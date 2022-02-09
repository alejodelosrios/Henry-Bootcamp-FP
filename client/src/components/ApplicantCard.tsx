import {FC} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import user from '../assets/user.png'
import PostStatusButton from './PostStatusButton';

interface Props {
    applicant: {
        firstName: string,
        lastName: string,
        country: string,
        img: string,
        skillTags: string[]
    }
    applicantId: number,
    postId: number,
    companyId: number
}

const divStyle = {
    textDecoration: "none",
    padding: 0,
  };

const Card = styled.div`
    position: relative;
    width: 100%;
    padding: 1rem;
    margin-bottom: 3px;
    border-bottom: 0.7px solid rgb(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:hover {
        background-color: ${p => p.theme.colors.backgrounds.base};
    }
`;

const FavsApp = styled.div`
    margin-left: 30px;
    font-size: 30px;
    cursor: pointer;
    color: ${p => p.theme.colors.details.secondary2};
`

const Photo = styled.img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0 2%;
`;

const Info = styled.div`
    width: 40%;
    color: ${p => p.theme.colors.typography.dark};
`;

const Name = styled.p`
    /* text-decoration: ${p => p.theme.colors.backgrounds.cards} underline; */
    color: ${p => p.theme.colors.typography.dark};
    font-size: 1.5rem;
    font-weight: bold;
`;

const Skills = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 35%;
    height: 100%;
`;

const Sk = styled.div`
    height: 30%;
    background-color: ${p => p.theme.colors.details.secondary1};
    font-size: 13px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2%;
    margin: 0 1%;
`

const ApplicantCard: FC<Props> = ({ applicant, applicantId, postId, companyId }) => {

    const testImg = user;

    const {firstName, lastName, country, img, skillTags } = applicant;

  return (
    <Card>
        <Photo src={img || testImg}/>
        <Info>
            <Link to={`/company/posts/${postId}/detail/applicant/${applicantId}`} style={divStyle}>
                <Name>{`${firstName} ${lastName}`}</Name>
            </Link>
            <span>{country}</span>
        </Info>
        <Skills>{skillTags.map((s: any) => (
                <Sk key={s.id}>{s.name}</Sk>
        ))}</Skills>

        <PostStatusButton postId={postId} applicantId={applicantId}/>
        <Link style={{textDecoration:'none'}} to={`/company/premium/${companyId}`}>
            <FavsApp>{'☆'}</FavsApp>
        </Link>
    </Card>
  );
};

export default ApplicantCard;
