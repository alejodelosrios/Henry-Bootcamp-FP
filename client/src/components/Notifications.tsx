import { FC, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { getNotifications } from "../redux/actions/actionCreators";

type Props = {
    role: string;
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

const Count = styled.div`
    position: absolute;
    bottom: -10%;
    left: -10%;
    font-size: 80%;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.backgrounds.pink};
    color: ${(p) => p.theme.colors.typography.lighter};
`;

const Modal = styled.div`
    position: absolute;
    bottom: -1;
    right: 0;
    background-color: white;
    width: 300px;
    max-height: 500px;
    overflow: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

const Noti = styled.li<{ viewed?: boolean }>`
    width: 100%;
    height: 50px;
    margin: 2px 0;
    background-color: ${(p) => p.theme.colors.details.secondary1};
    border-radius: 10px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
        background-color: #c779ff32;
    }

    ${(p) =>
        p.viewed &&
        css`
            background-color: white;
        `}
`;

const Notifications: FC<Props> = ({ role }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const { applicant, company } = useSelector(
        (state: any) => state.userReducer
    );

    const notifications =
        role === "applicant" ? applicant.notifications : company.notifications;

    const viewed = notifications?.filter((n: any) => !n.viewed).length;
    const dispatch = useDispatch();

    useEffect(() => {
        if (role === "applicant") {
            dispatch(getNotifications(role, applicant.id));
        } else if (role === "company") {
            dispatch(getNotifications(role, company.id));
        }
    }, []);

    const [modal, setModal] = useState(false);

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
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
            <NotBut
                onClick={() => setModal((oldState) => !oldState)}
                modal={modal}
            >
                {"●"}
                {viewed && !modal ? <Count>{viewed}</Count> : null}
            </NotBut>

            {modal && (
                <Modal>
                    {notifications.length
                        ? notifications.map((not: any) => (
                              <Noti key={not.id} viewed={not.viewed}>
                                  {not.message}
                              </Noti>
                          ))
                        : "Aún no tienes notificaciones..."}
                </Modal>
            )}
        </NotCont>
    );
};

export default Notifications;
