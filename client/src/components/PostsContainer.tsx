import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Paginated from "./Paginated/Paginated";
import Post from "./Post";

const Container = styled.div`
    margin: auto;
    width: 100%;
    height: 100vh;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    align-items: center;
`;

const PostsContainer = () => {
    const currentPosts = useSelector(
        (state: any) => state.postsReducer.currentPosts
    );

    //PAGINADO ////////////////////////////////////////////
    const [currPage, setCurrPage] = useState(1);    
    const PostsPerPage = 4;
    const ixLastPost = currPage * PostsPerPage;
    const ixFirstPost = ixLastPost - PostsPerPage;
    const currPost = currentPosts.slice(ixFirstPost, ixLastPost);

    const paginado = (pagNum: number)=>{
        setCurrPage(pagNum);
    }

    return (
        <>
            <Container>
                {currPost.map((post: any) => (
                    <Post
                        key={post.postId}
                        id={post.postId}
                        title={post.title}
                        location={post.location}
                        modality={post.modality}
                        salary={post.salary}
                        startDate={post.startDate}
                    />
                ))}
            </Container>
            
            <Paginated 
                PostsPerPage={PostsPerPage}
                AllPostsLength={currentPosts.length}
                paginado={paginado}
            />
        </>
    );
};

export default PostsContainer;

//experience={post.experience}
