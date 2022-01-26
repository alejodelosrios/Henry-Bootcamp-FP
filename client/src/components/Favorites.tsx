import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';
import styled, {css} from 'styled-components';

const FavCont = styled.div`
    position: relative;
`

const FavBut = styled.button<{ modal?: boolean }>`
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

    const favs = useSelector((state:any)=> state.userReducer.favs);
    const [modal, setModal] = useState(false);

    const handleFav = ()=>{
        setModal(!modal);
    }

  return <FavCont>
    
    <FavBut onClick={handleFav} modal={modal} >{modal ? '☆' : '★'}</FavBut>

    {modal && <Modal>
        {favs.map((post:any)=> 
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
  </FavCont>;
};

export default Favorites;
