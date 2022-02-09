import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { setCompanyCurrentPosts } from "../redux/actions/private/companyActions";
import { filterAndSort } from "../redux/actions/public/postsActions";
import Post from "./Post";

const Container = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  color: grey;
  font-family: ${(p) => p.theme.colors.typography.poppins};
  margin-top: 10vw;
  font-size: 2rem;
  text-align: center;
`;

const PostsContainer: FC = () => {
  const { companyId } = useParams();
  const dispatch = useDispatch();
  let currentItems = useSelector(
    (state: any) => state.postsReducer.currentItems
  );
  let filters = useSelector(
    (state: any) => state.postsReducer.filters_and_sort
  );
  let posts = useSelector((state: any) => state.postsReducer.posts);
  useEffect(() => {
    if (companyId) {
      let companyPosts = posts.filter(
        (post: any) => post.companyId + "" === companyId
      );
      dispatch(setCompanyCurrentPosts(companyPosts));
    } else {
      dispatch(filterAndSort(filters));
    }
  }, []);

  console.log("this is post:", currentItems);

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
              contract={post.contractType}
              startDate={post.startDate}
              companyLogo={post.company.companyLogo}
            />
          ))
        ) : (
          <P>Aún no se han realizado Publicaciones</P>
        )}
      </Container>
    </>
  );
};

export default PostsContainer;
