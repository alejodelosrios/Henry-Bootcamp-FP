import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "../pages/Dashboard/Dashboard";
import {getPostsById} from "../redux/actions/public/postsActions";
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

    const post = useSelector((state: any) => state.postsReducer.postById);

    useEffect(() => {
        dispatch(getPostsById(postId));
    }, [postId]);

    const random = [
        [{id: 1, name: 'Html'},
        {id: 2, name: 'Fundaciones'},
        {id: 3, name: 'Javascript'},
        {id: 4, name: 'React'}],

        [{id: 5, name: 'Swimmin'},
        {id: 6, name: 'Fun'},
        {id: 7, name: 'Hola'}],

        [{id: 9, name: 'No'},
        {id: 10, name: 'Se'},
        {id: 11, name: 'Javascript'},
        {id: 12, name: 'Pochoclos'}],

        [{id: 13, name: 'Hola'},
        {id: 14, name: 'No'},
        {id: 15, name: 'Si'},
        {id: 16, name: 'Talvez'}],
    ]

    function getRandomArbitrary(min:number, max:number) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const applyers = post.applicants?.map((el:any)=>(
        {...el, 
            applicant: {...el.applicant, 
                skillTags: random[getRandomArbitrary(0,3)] }}
    ));

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
