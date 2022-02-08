import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setFavApplicant, setPostStatus } from '../redux/actions/private/companyActions';
import { checkExistance } from '../services/checkExistance';
import PostStatusButton from './PostStatusButton';

interface Props {
    column: any,
    row: any,
    postId:number,
    favorites: object[]
}

const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Fav = styled.div`
    font-size: 30px;
    cursor: pointer;
    color: ${p => p.theme.colors.details.secondary2};
`

const Td: FC <Props> = ({column, row, postId}) => {

    const dispatch = useDispatch();

    const [isFav, setIsFav] = useState(false);

    const {favorites} = useSelector(
        (state:any)=> state.postsReducer.postById
    )

    useEffect(() => {
        setIsFav(checkExistance(favorites, row.applicantId))
    }, [favorites]);

    const handleFav = ()=>{
        dispatch(setFavApplicant(row.applicantId, postId));
        setIsFav(!isFav);
    }

  return (
    <td>{
        column === 'image'
            ? <Link to={`./applicant/${row.applicantId}`} 
                onClick={()=>{
                    row.status === 'applied' &&
                    dispatch(setPostStatus(postId, row.applicantId, 'inProcess'))}
                }>
                <img src={row.applicant[column]} alt="" />
            </Link>
            : column === 'skillTags'
                ? row.applicant[column]?.map((sk:any)=> <p key={sk.id}>{sk.name}</p>)
                : column === 'actions'
                    ? <Actions>
                        <Fav onClick={handleFav}>{isFav ? '★' : '☆' }</Fav>
                        <PostStatusButton postId={postId} applicantId={row.applicantId}/>
                    </Actions>
                    : row.applicant[column]
    }</td>
  );
};

export default Td;
