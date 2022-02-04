import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "../pages/Dashboard/Dashboard";
import {getPostsById} from "../redux/actions/actionCreators";
import ApplicantByPost from "./ApplicantsByPost";

const Title = styled.h1`
    color: ${p=>p.theme.colors.typography.dark};
    font-family: ${p => p.theme.colors.typography.poppins};
    height: 10%;
    display: flex;
    align-items: center;
`

const Return = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin: 0 2%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s;
    color: ${p => p.theme.colors.typography.dark};

    &:hover{
        background-color: white;
        transform: translate(-5px);
    }
`

const CompanyPostDetail = () => {
    const {postId} = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPostsById(postId));
    }, []);

    const post = useSelector((state: any) => state.postsReducer.postById);
    
    return (
        <Dashboard>
            {post.title && <>
                <Title>
                    <Link style={{textDecoration:'none'}} to='/company/posts'><Return>↤</Return></Link>
                    Postulantes para {post.title.toUpperCase()} en {post.location}:
                </Title>
                <ApplicantByPost applicants={post.applicants} postId={post.id} favorites={post.favorites}/>
            </>}
        </Dashboard>
    )
}

export default CompanyPostDetail;
