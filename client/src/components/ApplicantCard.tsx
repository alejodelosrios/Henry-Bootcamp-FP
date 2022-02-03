import {FC, useEffect, useState} from 'react';
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
    height: 150px;
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
    font-size: 30px;
    cursor: pointer;
    color: ${p => p.theme.colors.details.secondary2};
`

const Photo = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 0 2%;
`;

const Info = styled.div`
    width: 40%;
    color: ${p => p.theme.colors.typography.dark};
`;

const Name = styled.h1`
    text-decoration: ${p => p.theme.colors.backgrounds.cards} underline;
    color: ${p => p.theme.colors.typography.dark};
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

const ApplicantCard: FC<Props> = ({ applicant, applicantId, postId}) => {

    const dispatch = useDispatch();
    const testImg = 'https://i.pinimg.com/564x/f4/8f/0a/f48f0aaac7925f65c5224951d5153b76.jpg'

    const {firstName, lastName, country, img, skillTags } = applicant;

    const {favoritedBy} = useSelector(
        (state:any)=> state.postsReducer.postById
    )

    const showSkills = skillTags.length > 5
        ? skillTags.splice(0,5)
        : skillTags.length
            ? skillTags
            : ['Html', 'Css', 'Javascript', 'React', 'Redux'];


    // checkExistance(favApplicants, applicantId)
    console.log(favoritedBy);
    const [isFav, setIsFav] = useState(checkExistance(favoritedBy, applicantId));
    

    const handleFav = ()=>{
        dispatch(setFavApplicant(applicantId, postId));
        setIsFav(!isFav);
    }

  return (
    <Card>
        <Photo src={img || testImg}/>
        <Info>
            <Link to={`/applicant/${applicantId}`}>
                <Name>{`${firstName} ${lastName}`}</Name>
            </Link>
            <h2>{country}</h2>
        </Info>
        <Skills>{showSkills.map(s => (
                <Sk key={s}>{s}</Sk>
        ))}</Skills>
        <FavsApp onClick={handleFav}>{isFav ? '★' : '☆' }</FavsApp>
    </Card>
  );
};

export default ApplicantCard;
