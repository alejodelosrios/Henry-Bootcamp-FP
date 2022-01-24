import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { checkExistance } from "../services/checkExistance";

interface Props {
  postId: Number;
}

const Button = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: #ef5da8;
`;
const FavouritesButton: FC<Props> = ({ postId }) => {
  console.log(postId);
  //const dispatch = useDispatch(setFavs({ postId, userId }));
  //const favs = useSelector((state) => state.userReducer.favs);
  const favs = [1, 2, 3, 4, 5]; //  Arreglo de prueba
  let isFav = checkExistance(favs, postId);
  console.log(isFav);
  return (
    <>{isFav === true ? <Button>Guardar</Button> : <Button>Retirar</Button>}</>
  );
};

export default FavouritesButton;
