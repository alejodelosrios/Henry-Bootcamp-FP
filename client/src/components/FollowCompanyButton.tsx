import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { checkExistance } from "../services/checkExistance";

interface Props {
  companyId: number;
}

const Button = styled.button<{ isFol?: boolean }>`
  border: none;
  background-color: ${p => p.theme.colors.details.primary};
  color: ${p => p.theme.colors.typography.lighter};
  cursor: pointer;
  padding: 1% 1%;
  border-radius: 5px;

  ${p => p.isFol && (
        css`background-color: ${p => p.theme.colors.details.secondary2};
        color: white;`
    )}
`;

const FavouritesButton: FC<Props> = ({ companyId }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  //const dispatch = useDispatch(setFollows({ postId, userId }));
  const followings = useSelector((state:any) => state.userReducer.followings);
  useEffect(() => {
    setIsFollowed(checkExistance(followings, companyId))
  }, []);

  const handleClick = ()=>{
    // dispatch(setFollows(companyId))
    setIsFollowed(!isFollowed);
  }

  return <Button onClick={handleClick} isFol={isFollowed}>
    {isFollowed ? 'Siguiendo' : 'Seguir'}
  </Button>
};

export default FavouritesButton;

