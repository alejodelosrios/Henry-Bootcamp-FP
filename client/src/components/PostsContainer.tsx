import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Post from "./Post";

const Container = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
`;


const PostsContainer: FC = () => {

  let currentItems = useSelector(
    (state: any) => state.postsReducer.currentItems
  );

  return (
    <>
      <Container>
        {currentItems.length > 0 ? (
          currentItems.map((post: any) => (
            <Post
              key={post.id}
              postId={post.id}
              companyId={post.companyId}
              title={post.title}
              location={post.location}
              modality={post.modality}
              salary={post.salary}
              startDate={post.startDate}
              companyLogo={post.company.companyLogo}
            />
          ))
        ) : (
          <p>La empresa aún no ha realizado ninguna publicación</p>
        )}
      </Container>
    </>
  );
};

export default PostsContainer;
