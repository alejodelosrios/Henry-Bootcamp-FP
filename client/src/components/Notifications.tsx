import { FC, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { getNotifications, setNotification } from "../redux/actions/private/generalActions";
import Bell from '../assets/Bell.svg';

type Props = {
    role: string;
};

const NotCont = styled.div`
    position: relative;
    z-index: 1000;
`;

const NotBut = styled.button<{ modal?: boolean }>`
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
    margin-top: 7px;
    bottom: -1;
    right: 0;
    background-color: white;
    width: 300px;
    max-height: 500;
    overflow: auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    z-index: 1000;
`;

const Noti = styled.div<{ viewed?: boolean }>`
    display: flex;
    align-items: center;
    padding: 2%;
    width: 100%;
    height: 50px;
    margin: 2px 0;
    background-color: ${(p) => p.theme.colors.typography.lighter};
    border-radius: 10px;
    cursor: pointer;
    color: ${p => p.theme.colors.details.secondary2};
    &:hover {
        background-color: #c779ff32;
        height: 100%;
        border: solid 1px ${p => p.theme.colors.details.secondary2};
        
        p{
            white-space: pre-wrap;
            font-size: 85%;
        }
    }

    ${(p) =>
        p.viewed &&
        css`
            background-color: white;
        `}

    p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
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

    const handleNotif = (not:any)=>{
        // dispatch(setNotification(not.id, {viewed: true, message: 'hola'}))
        console.log(not);
    }

    return (
        <NotCont ref={divRef}>
            <NotBut
                onClick={() => setModal((oldState) => !oldState)}
                modal={modal}
            >
                <img src={Bell} alt='notifications'/>
                {viewed && !modal ? <Count>{viewed}</Count> : null}
            </NotBut>

            {modal && (
                <Modal>
                    {notifications.length
                        ? notifications.map((not: any) => (
                                <Noti 
                                    key={not.id}
                                    onClick={()=> handleNotif(not)}
                                    viewed={not.viewed}>
                                    <p>{not.message}</p>
                                </Noti>
                                // <Link 
                                //     to={`/company/${not.companyId}/post/${not.postId}`}
                                //     key={not.id} 
                                //     style={{textDecoration:'none'}} 
                                //     onClick={()=> handleNotif(not)}
                                // >
                                //     <Noti viewed={not.viewed}>
                                //         <p>{not.message}</p>
                                //     </Noti>
                                // </Link>
                          ))
                        : "Aún no tienes notificaciones..."}
                </Modal>
            )}
        </NotCont>
    );
};

export default Notifications;
