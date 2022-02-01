import {FC, useState} from "react";
import {useSelector} from "react-redux";
import PostCard from "./PostCard/PostCard";

import Paginated from "../../components/Paginated/Paginated";

import {Title, PT, Container, CardContainer} from "./styles";
import Dashboard from "../Dashboard/Dashboard";

const UserPostulations: FC = () => {
  const postulations = useSelector(
    (state: any) => state.userReducer.applicant.postulations
  );


  //PAGINADO ////////////////////////////////////////////
  const [currPage, setCurrPage] = useState(1);
  const PostsPerPage = 4;
  const ixLastPost = currPage * PostsPerPage;
  const ixFirstPost = ixLastPost - PostsPerPage;
  const currPost = postulations.slice(ixFirstPost, ixLastPost);

  const paginado = (pagNum: number) => {
    setCurrPage(pagNum);
  };

  return (
    <Dashboard>
      <Container>
        <Title>
          <PT>Mis</PT> Postulaciones
        </Title>
        <CardContainer>
          {postulations.length > 0
            ? postulations.map((el: any, i: number) => (
              <PostCard
                key={i}
                postId={el.postId}
                applicantId={el.applicantId}
                state={el.state}
                created_at={el.created_at}
                post={el.post}
              />
            ))
            : null}
        </CardContainer>
      </Container>

      {/* {currPost.map((post: any) => (
      <Post
        key={post.postId}
        id={post.postId}
        title={post.title}
        location={post.location}
        startDate={post.startDate}
      />
    ))} */}

      <Paginated
        PostsPerPage={PostsPerPage}
        AllPostsLength={postulations.length}
        paginado={paginado}
      />
    </Dashboard>
  );
};

export default UserPostulations;
