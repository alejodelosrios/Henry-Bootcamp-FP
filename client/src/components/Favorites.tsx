import { FC, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { getFavorite } from "../redux/actions/applicantActionCreators";

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
    right: 0;
    background-color: white;
    width: 300px;
    height: 500px;
    overflow: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

const FavNot = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    height: 50px;
    justify-content: center;
    margin: 2px 0;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: #c779ff32;
    }
`;

const Detail = styled.p`
    color: black;
    text-decoration: none;
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
                {"★"}
            </FavBut>

            {modal && (
                <Modal>
                    {favs?.map((post: any) => (
                        <FavNot
                            key={post.id}
                            onClick={() => setModal((oldState) => !oldState)}
                        >
                            <Link
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
