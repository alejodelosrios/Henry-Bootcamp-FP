import {FC} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import FavouritesButton from './FavouritesButton';

interface Props {
    name: string,
    country: string,
    img: string,
    skills: string[],
    id: number
}

const Card = styled.div`
    background-color: ${p => p.theme.colors.backgrounds.cards};
    width: 100%;
    padding: 2% 0;
    margin-bottom: 3px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:hover {
        background-color: ${p => p.theme.colors.backgrounds.base};
    }
`;

const Photo = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 0 2%;
`;

const Info = styled.div`
    width: 80%;
    color: ${p => p.theme.colors.typography.dark};
`;

const Name = styled.h1`
    text-decoration: ${p => p.theme.colors.backgrounds.cards} underline;
    color: ${p => p.theme.colors.typography.dark};


`;

const Skills = styled.div`
    display: flex;
    align-items: center;
    max-width: 90%;
`;

const Sk = styled.div`
    background-color: ${p => p.theme.colors.details.secondary1};
    font-size: 13px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1%;
    margin: 0 1%;
`

const ApplicantCard: FC<Props> = ({name, country, img, skills, id}) => {

    const testImg = 'https://lh3.googleusercontent.com/ogw/ADea4I4JwPvgMEtnazYdZHcb0xWqmBA2FUvTqlBKzh3eMA=s83-c-mo'

    const showSkills = skills.length > 5
        ? skills.splice(0,5)
        : skills;

  return (
    <Card>
        {/* <FavouritesButton postId={id}/> */}
        <Photo src={img || testImg}/>
        <Info>
            <Link to={`/applicant/${id}`}><Name>{name}</Name></Link>
            <h2>{country}</h2>
            <Skills>{showSkills.map(s => (
                <Sk>{s}</Sk>
            ))}</Skills>
        </Info>
    </Card>
  );
};

export default ApplicantCard;
