import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import styled, {css} from 'styled-components';
import { getNotifications } from '../redux/actions/actionCreators';

type P = {
    role: string
}

const NotCont = styled.div`
    position: relative;
`

const NotBut = styled.button<{ modal?: boolean }>`
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${p => p.theme.colors.details.secondary1};
    color: ${p => p.theme.colors.details.secondary2};

    ${prop => prop.modal && (
        css`background-color: ${p => p.theme.colors.details.secondary2};
        color: ${p => p.theme.colors.details.secondary1};`
    )}
`

const Count = styled.div`
    position: absolute;
    bottom: -30%;
    right: -30%;
    font-size: 80%;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${p => p.theme.colors.backgrounds.pink};
    color: ${p => p.theme.colors.typography.lighter};
`

const Modal = styled.div`
    position: absolute;
    bottom: -1;
    right: 0;
    background-color: #86868630;
    backdrop-filter: blur(2px);
    width: 300px;
    max-height: 500px;
    overflow: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`

const Noti = styled.li`
    width: 100%;
    margin: 3% 0;
`

const Notifications:FC<P> = ({role}) => {

    const {notifications, applicant, company} = useSelector((state:any)=> state.userReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        if(role === 'applicant'){
            dispatch(getNotifications(role, applicant.id))
        }else if(role === 'company'){
            dispatch(getNotifications(role, company.id))
        }
    }, []);

    const [modal, setModal] = useState(false);

    const handleNotif = ()=>{
        setModal(!modal);
    }

  return <NotCont>
    
    <NotBut onClick={handleNotif} modal={modal} >
        {'●'}
        {notifications.length && !modal &&<Count>{notifications.length}</Count>}
    </NotBut>

    {modal && <Modal>
        {notifications.map((not:any)=> 
        //Hay que modificar este Post para revisar lo que recibe!!
            <Noti key={not.id}>{not.message}</Noti>
        )}</Modal>
    }
  </NotCont>;
};

export default Notifications;
