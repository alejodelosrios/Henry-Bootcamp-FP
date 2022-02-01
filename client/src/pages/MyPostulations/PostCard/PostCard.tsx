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
} from "./styles";
import PostulationState from "../PostulationState/PostulationState";

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
                    <P3>Eliminar</P3>
                </ContenedorF>
            </ContenedorA>
        </>
    );
};

export default PostCard;
