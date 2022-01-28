import { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { getFavorite } from "../redux/actions/actionCreators";

type P = {
    role: string;
};

const FavCont = styled.div`
    position: relative;
`;

const FavBut = styled.button<{ modal?: boolean }>`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.backgrounds.base};
    color: ${(p) => p.theme.colors.details.secondary2};

    ${(prop) =>
        prop.modal &&
        css`
            background-color: ${(p) => p.theme.colors.details.secondary2};
            color: white;
        `}
`;
const Modal = styled.div`
    position: absolute;
    bottom: -1;
    right: 0;
    background-color: lightblue;
    width: 300px;
    height: 500px;
    overflow: auto;
`;

const FavNot = styled.div`
    display:flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
`

const Favorites: FC<P> = ({ role })=> {
    const favs = useSelector((state: any) => state.userReducer.applicant.favorites);
    const [modal, setModal] = useState(false);
    const {  applicant } = useSelector(
        (state: any) => state.userReducer
    );

    const handleFav = () => {
        setModal(!modal);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        if (role === "applicant") {
            dispatch(getFavorite(role, applicant.id));
        }
    }, []);

    return (
        <FavCont>
            <FavBut onClick={handleFav} modal={modal}>
                {modal ? "☆" : "★"}
            </FavBut>

            {modal && (
                <Modal>
                    {favs.map((post: any) => (
                        //Hay que modificar este Post para revisar lo que recibe!!
                        <FavNot>
                            <p>{post.title}</p>
                            <p>{post.location.country}</p>
                        </FavNot>
                    ))}
                </Modal>
            )}
        </FavCont>
    );
};

export default Favorites;
