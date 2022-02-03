import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCurrentPosts } from "../redux/actions/actionCreators";
import Paginated from "./Paginated/Paginated";
import Post from "./Post";

const Container = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  companyId?: number;
}

const PostsContainer: FC<Props> = ({ companyId }) => {
  const posts = useSelector((state: any) => state.postsReducer.posts);

  let currentItems = useSelector(
    (state: any) => state.postsReducer.currentItems
  );

  //PAGINADO ////////////////////////////////////////////
  // const [currPage, setCurrPage] = useState(1);
  // const PostsPerPage = 4;
  // const ixLastPost = currPage * PostsPerPage;
  // const ixFirstPost = ixLastPost - PostsPerPage;
  // const currPost = currentPosts.slice(ixFirstPost, ixLastPost);
  // const currentCompanyPosts = companyPosts.slice(ixFirstPost, ixLastPost);

  // const paginado = (pagNum: number) => {
  //   setCurrPage(pagNum);
  // };

  //console.log(currentCompanyPosts);
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
        {/* {companyId && currentCompanyPosts.length > 0
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
                companyLogo={post.company.companyLogo}
              />
            ))
          : companyId &&
            currentCompanyPosts.length === 0 && (
              <p>La empresa aún no ha realizado ninguna publicación</p>
            )}
        {!companyId && currPost.length > 0
          ? currPost.map((post: any) => (
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
          : !companyId &&
            currPost.length === 0 && (
              <p>No se encontró coincidencias con lo buscado</p>
            )} */}
      </Container>

      {/* {companyId ? (
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
      )} */}
    </>
  );
};

export default PostsContainer;
