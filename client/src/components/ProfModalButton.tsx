import {FC, useEffect, useRef, useState} from "react";
import {Logout} from "./Logout";
import {Link} from "react-router-dom";
import styled, {css} from "styled-components";
import {useSelector} from "react-redux";
import User from '../assets/User.svg';

type P = {
    user: any;
};

const NotCont = styled.div`
    position: relative;
    z-index: 1000;
`;

const NotBut = styled.button<{modal?: boolean}>`
    position: relative;
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
    margin-top: 7px;
    bottom: -1;
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

const Noti = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.3rem 0.5rem;
    margin: 2px 0;
    border-radius: 5px;
    cursor: pointer;
    color: ${p => p.theme.colors.details.secondary2};
    &:hover {
        background-color: #c779ff32;
    }
`;

const ProfModalButton: FC<P> = ({user}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const companyId = useSelector((state: any) => state.userReducer.company.id);
    const role = useSelector((state: any) => state.userReducer.role);
    const [modal, setModal] = useState(false);

    const handleNotif = () => {
        setModal(!modal);
    };


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
        <NotCont ref={divRef}>
            <NotBut onClick={handleNotif} modal={modal}>
                <img src={User} alt='user options' />
            </NotBut>

            {modal && (
                <Modal>
                    {role === "company" ? (
                        <>
                            <Link
                                to={`/edit-company/${companyId}`}
                                style={{textDecoration: "none"}}
                                onClick={handleNotif}
                            >
                                <Noti>Perfil</Noti>
                            </Link>
                            <Link to={`/create-post`}
                                style={{textDecoration: "none"}}
                                onClick={handleNotif}>
                                <Noti>Crear post</Noti>
                            </Link>
                            <Link to={`/company/posts`}
                                style={{textDecoration: "none"}}
                                onClick={handleNotif}>
                                <Noti>Ofertas laborales</Noti>
                            </Link>
                        </>
                    ) : (

                        <>
                            <Link
                                to="/my-applications"
                                style={{textDecoration: "none", cursor: "default"}}
                            >
                                <Noti>Postulaciones</Noti>
                            </Link>
                            <Link to={`/profile`} onClick={handleNotif}
                                style={{textDecoration: "none", cursor: "default"}}
                            >
                                <Noti>Perfil</Noti>
                            </Link>
                        </>
                    )}
                    <Noti onClick={handleNotif}>
                        <Logout contenido="Logout" estilo="primary" />
                    </Noti>
                </Modal>
            )}
        </NotCont>
    );
};

export default ProfModalButton;
