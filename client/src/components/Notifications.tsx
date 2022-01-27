import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';
import styled, {css} from 'styled-components';

const NotCont = styled.div`
    position: relative;
`

const NotBut = styled.button<{ modal?: boolean }>`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${p => p.theme.colors.backgrounds.base};
    color: ${p => p.theme.colors.details.secondary2};

    ${prop => prop.modal && (
        css`background-color: ${p => p.theme.colors.details.secondary2};
        color: white;`
    )}
`
const Modal = styled.div`
    position: absolute;
    bottom: -1;
    right: 0;
    background-color: lightblue;
    width: 300px;
    height: 500px;
    overflow: auto;
`

const Favorites:FC = () => {

    const notifications = useSelector((state:any)=> state.userReducer.notifications);
    const [modal, setModal] = useState(false);

    const handleNotif = ()=>{
        setModal(!modal);
    }

  return <NotCont>
    
    <NotBut onClick={handleNotif} modal={modal} >{modal ? '○' : '●'}</NotBut>

    {modal && <Modal>
        {notifications.map((post:any)=> 
        //Hay que modificar este Post para revisar lo que recibe!!
            <Post
                key={post.postId}
                id={post.postId}
                title={post.title}
                location={post.location}
                modality={post.modality}
                salary={post.salary}
                startDate={post.startDate}
            />
        )}</Modal>
    }
  </NotCont>;
};

export default Favorites;
