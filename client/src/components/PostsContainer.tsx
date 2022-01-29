import { FC, useState } from "react";
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

interface Props {
    companyId?: number;
}

const PostsContainer: FC<Props> = ({ companyId }) => {
    const currentPosts = useSelector(
        (state: any) => state.postsReducer.currentPosts
    );
    const companyPosts = currentPosts.filter(
        (post: any) => post.companyId === companyId
    );

    //PAGINADO ////////////////////////////////////////////
    const [currPage, setCurrPage] = useState(1);
    const PostsPerPage = 4;
    const ixLastPost = currPage * PostsPerPage;
    const ixFirstPost = ixLastPost - PostsPerPage;
    const currPost = currentPosts.slice(ixFirstPost, ixLastPost);
    const currentCompanyPosts = companyPosts.slice(ixFirstPost, ixLastPost);

    const paginado = (pagNum: number) => {
        setCurrPage(pagNum);
    };

    //console.log(currentCompanyPosts);
    return (
        <>
            <Container>
                {companyId
                    ? currentCompanyPosts.map((post: any) => (
                          <Post
                              key={post.id}
                              postId={post.id}
                              companyId={post.companyId}
                              title={post.title}
                              location={post.location}
                              modality={post.modality}
                              salary={post.salary}
                              startDate={post.startDate}
                          />
                      ))
                    : currPost.map((post: any) => (
                          <Post
                              key={post.id}
                              postId={post.id}
                              companyId={post.companyId}
                              title={post.title}
                              location={post.location}
                              modality={post.modality}
                              salary={post.salary}
                              startDate={post.startDate}
                          />
                      ))}
            </Container>

            {companyId ? (
                <Paginated
                    PostsPerPage={PostsPerPage}
                    AllPostsLength={companyPosts.length}
                    paginado={paginado}
                />
            ) : (
                <Paginated
                    PostsPerPage={PostsPerPage}
                    AllPostsLength={currentPosts.length}
                    paginado={paginado}
                />
            )}
        </>
    );
};

export default PostsContainer;

//experience={post.experience}
