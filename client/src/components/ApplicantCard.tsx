import {FC, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setFavApplicant } from '../redux/actions/companyActionCreators';
import { checkExistance } from '../services/checkExistance';

interface Props {
    applicant: {
        firstName: string,
        lastName: string,
        country: string,
        img: string,
        skillTags: string[]
    }
    applicantId: number,
    postId: number
}

const Card = styled.div`
    position: relative;
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

const FavsApp = styled.div`
    position: absolute;
    top: 10%;
    right: 2%;
    font-size: 25px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${p => p.theme.colors.details.secondary2};
`

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

const ApplicantCard: FC<Props> = ({ applicant, applicantId, postId}) => {

    const dispatch = useDispatch();
    const testImg = 'https://lh3.googleusercontent.com/ogw/ADea4I4JwPvgMEtnazYdZHcb0xWqmBA2FUvTqlBKzh3eMA=s83-c-mo'

    const {firstName, lastName, country, img, skillTags } = applicant;
    let favApplicants = []

    favApplicants = useSelector(
        (state:any)=> state.postsReducer.postById.favApplicants
    )

    // checkExistance(favApplicants, applicantId)
    const [isFav, setIsFav] = useState(false);

    const showSkills = skillTags.length > 5
        ? skillTags.splice(0,5)
        : skillTags;

    const handleApp = ()=>{
        console.log('dispatch en componente');
        dispatch(setFavApplicant(applicantId, postId));
        setIsFav(!isFav);
    }

  return (
    <Card>
        {/* <FavouritesButton postId={id}/> */}
        <Photo src={img || testImg}/>
        <Info>
            <Link to={`/applicant/${applicantId}`}>
                <Name>{`${firstName} ${lastName}`}</Name>
            </Link>
            <h2>{country}</h2>
            <Skills>{showSkills.map(s => (
                <Sk>{s}</Sk>
            ))}</Skills>
        </Info>
        <FavsApp onClick={handleApp}>{isFav ? '✦' : '✧' }</FavsApp>
    </Card>
  );
};

export default ApplicantCard;
