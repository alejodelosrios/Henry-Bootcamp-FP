import { FC, useState } from "react";
import { Logout } from "./Logout";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

type P = {
    user: any;
};

const NotCont = styled.div`
    position: relative;
    z-index: 1000;
`;

const NotBut = styled.button<{ modal?: boolean }>`
    position: relative;
    width: 50px;
    height: 50px;
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
    width: max-content;
    max-height: 500px;
    overflow: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

const Noti = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px 0;
    padding-right: 5px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #c779ff32;
    }
`;

const ProfModalButton: FC<P> = ({ user }) => {

    console.log(user);
    const [modal, setModal] = useState(false);

    const handleNotif = () => {
        setModal(!modal);
    };

    return (
        <NotCont>
            <NotBut onClick={handleNotif} modal={modal}>
                {"+"}
            </NotBut>

            {modal && (
                <Modal>
                    <Link to='/profile' onClick={handleNotif}>
                        <Noti>
                            {user.firstName || 'My' + ' ' + user.lastName + 'profile'}
                        </Noti>
                    </Link>
                    <Noti onClick={handleNotif}>
                        <Logout contenido="Logout" estilo="primary" />
                    </Noti>
                </Modal>
            )}
        </NotCont>
    );
};

export default ProfModalButton;
