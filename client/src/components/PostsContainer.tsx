import { useSelector } from "react-redux";
import styled from "styled-components";
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
    return (
        <Container>
            {currentPosts.map((post: any) => (
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
    );
};

export default PostsContainer;

//experience={post.experience}
