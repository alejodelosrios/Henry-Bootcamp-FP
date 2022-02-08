import { FC, useState } from "react";
import { Link } from "react-router-dom";
import FavouritesButton from "../../../components/FavouritesButton";
import img from "../../../assets/cocacola-logo.jpg";

import {
    ContenedorA,
    ContenedorB,
    Box,
    Img,
    ContenedorC,
    Title,
    P,
    ContenedorB2,
    ContenedorF,
    P3,
    Modal,
    Overlay,
} from "./styles";
import PostulationState from "../PostulationState/PostulationState";
import { StarRating } from "../../../components/StarRating";

type PostArgs = {
    postId: number;
    applicantId: number;
    status: string;
    created_at: string;
    post: {
        id: number;
        companyId: number;
        title: string;
        location: string;
    };
};
const PostCard = ({
    postId,
    applicantId,
    status,
    created_at,
    post,
}: PostArgs) => {
    const [modalFlag, setModalFlag] = useState('none')
    const modalSwitch = ():any => {
        modalFlag === 'none' ? setModalFlag('block') : setModalFlag('none')
    }
    return (
        <>
            <ContenedorA>
                <ContenedorB>
                    <Box>
                        <Link to={`/company/${post.companyId}`}>
                            {" "}
                            {/* Hay rutas que lleven a una empresa en especifico?? */}
                            <Img src={img} alt="img-logo-company" />
                        </Link>
                    </Box>
                    <ContenedorC>
                        <div>
                            <Title>{post.title}</Title>
                            <P>{post.location}</P>
                        </div>
                    </ContenedorC>
                    <ContenedorB2>
                        <PostulationState
                            postId={postId}
                            status={status}
                            companyId={post.companyId}
                        />
                    </ContenedorB2>
                </ContenedorB>
                <ContenedorF>
                    <P3>{created_at}</P3>
                    {status === 'completed' && <P3 onClick={modalSwitch} style={{cursor: 'pointer'}}>Calificar</P3>}
                    <Modal style={{
                        position: "fixed",
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: modalFlag,
                        zIndex: 2001
                    }}>
                        <span onClick={modalSwitch} style={{color: 'red', cursor: 'pointer', position: "fixed", right: 20, top: 8, fontSize: '40px', fontWeight: 'bold'}}>×</span>
                        <StarRating companyId={post.companyId}/>
                        </Modal>
                    <Overlay className='overlay' style={{
                        background: '#0000008f',
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        zIndex: 2000,
                        display: modalFlag
                    }}
                    onClick={modalSwitch}></Overlay>
                </ContenedorF>
            </ContenedorA>
        </>
    );
};

export default PostCard;
