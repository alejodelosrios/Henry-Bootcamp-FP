import { FC, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { getFavorite } from "../redux/actions/private/applicantActions";
import Star from '../assets/Star.svg';

type Props = {
    role: string;
};

const FavCont = styled.div`
    position: relative;
`;

const FavBut = styled.button<{ modal?: boolean }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.details.secondary1};
    color: ${(p) => p.theme.colors.details.secondary2};

    ${(prop) =>
        prop.modal &&
        css`
            background-color: ${(p) => p.theme.colors.details.secondary2};
            color: ${(p) => p.theme.colors.details.secondary1};
        `}
`;
const Modal = styled.div`
    position: absolute;
    bottom: -1;
    margin-top: 7px;
    right: 0;
    background-color: white;
    width: max-content;
    max-height: 700;

    overflow: auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    z-index: 1000;
`;

const FavNot = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    text-transform: capitalize;
    &:hover {
        background-color: #c779ff32;
    }
    height: 50px;
`;

const Detail = styled.p`
    color: ${p => p.theme.colors.details.secondary2};
    font-family: ${(p) => p.theme.colors.typography.poppins};
`;

const Favorites: FC<Props> = ({ role }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const favs = useSelector(
        (state: any) => state.userReducer.applicant.favorites
    );
    const [modal, setModal] = useState(false);
    const { applicant } = useSelector((state: any) => state.userReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        if (role === "applicant") {
            dispatch(getFavorite(role, applicant.id));
        }
    }, []);

    useEffect(() => {
        const checkIfClickedOutside = (e:any) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (modal && divRef.current && !divRef.current.contains(e.target)) {
                setModal(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [modal]);

    return (
        <FavCont ref={divRef}>
            <FavBut
                onClick={() => setModal((oldState) => !oldState)}
                modal={modal}
            >
                <img src={Star} alt='favorites'/>
            </FavBut>

            {modal && (
                <Modal>
                    {favs?.map((post: any) => (
                        <FavNot
                            key={post.id}
                            onClick={() => setModal((oldState) => !oldState)}
                        >
                            <Link style={{textDecoration:'none'}}
                                to={`/company/${post.companyId}/post/${post.id}`}
                            >
                                <Detail>
                                    {post.title} - {post.location}
                                </Detail>
                            </Link>
                        </FavNot>
                    ))}
                </Modal>
            )}
        </FavCont>
    );
};

export default Favorites;
