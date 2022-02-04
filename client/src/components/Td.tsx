import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setFavApplicant } from '../redux/actions/companyActionCreators';
import { checkExistance } from '../services/checkExistance';

interface Props {
    column: any,
    row: any,
    postId:number,
    favorites: object[]
}

const FavsApp = styled.div`
    font-size: 30px;
    cursor: pointer;
    color: ${p => p.theme.colors.details.secondary2};
`

const Td: FC <Props> = ({column, row, postId}) => {
    // const dispatch = useDispatch();

    // const [isFav, setIsFav] = useState(checkExistance(favorites, row.applicantId));

    // const handleFav = ()=>{
    //     dispatch(setFavApplicant(row.applicantId, postId));
    //     setIsFav(!isFav);
    // }

    const dispatch = useDispatch();

    const {favorites} = useSelector(
        (state:any)=> state.postsReducer.postById
    )

    // checkExistance(favorites, applicantId)
    const [isFav, setIsFav] = useState(checkExistance(favorites, row.applicantId));
    

    const handleFav = ()=>{
        dispatch(setFavApplicant(row.applicantId, postId));
        setIsFav(!isFav);
    }

  return (
    <td>{
        column === 'image'
            ? <Link to={`./applicant/${row.applicantId}`}>
                <img src={row.applicant[column]} alt="" />
            </Link>
            : column === 'skillTags'
                ? row.applicant[column].map((sk:any)=> <p>{sk.name}</p>)
                : column === 'favorites' 
                    ? <FavsApp onClick={handleFav}>
                        {isFav ? '★' : '☆' }
                    </FavsApp>
                    : row.applicant[column] 
    }</td>
  );
};

export default Td;
