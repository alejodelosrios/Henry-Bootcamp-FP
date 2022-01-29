import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setFavorite } from "../redux/actions/applicantActionCreators";
import { checkExistance } from "../services/checkExistance";

interface Props {
  postId: number;
}

const Button = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: #ef5da8;
  cursor: pointer;
`;
const FavouritesButton: FC<Props> = ({ postId }) => {
  const dispatch = useDispatch();
  const {favorites, id} = useSelector((state:any) => state.userReducer.applicant);
  const [isFav, setIsFav] = useState(checkExistance(favorites, postId));

  const handleFav = ()=>{
    dispatch(setFavorite(id, postId));
    setIsFav(!isFav)
  }

  return (
    <Button onClick={handleFav}>
      {isFav ? 'Retirar' : 'Guardar'}
    </Button>
  );
};

export default FavouritesButton;
