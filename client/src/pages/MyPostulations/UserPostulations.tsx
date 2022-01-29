import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { NavBar } from "../../components/NavBar";
import PostCard from "./PostCard/PostCard";

import Paginated from "../../components/Paginated/Paginated";

import { Title, PT, Container, TopBackground, CardContainer } from "./styles";

const UserPostulations: FC = () => {
  //const postulations = useSelector((state:any)=> state.userReducer.postulations);

  const postulations = [
    {
      postId: 1,
      applicantId: 1,
      state: "submitted",
      created_at: "10-01-2022",
      post: {
        id: 1,
        companyId: 3,
        title: "Titulo de post",
        location: "Lake Ville",
      },
    },
    {
      postId: 2,
      applicantId: 1,
      state: "inProgress",
      created_at: "18-02-2022",
      post: {
        id: 2,
        companyId: 1,
        title: "Titulo de post",
        location: "Port fort",
      },
    },
    {
      postId: 3,
      applicantId: 1,
      state: "inTouch",
      created_at: "12-02-2022",
      post: {
        id: 3,
        companyId: 2,
        title: "Titulo de post",
        location: "Lake Ville",
      },
    },
    {
      postId: 4,
      applicantId: 1,
      state: "completed",
      created_at: "10-01-2022",
      post: {
        id: 4,
        companyId: 3,
        title: "Titulo de post",
        location: "Lake Ville",
      },
    },
  ];

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
    <>
      <Container>
        <TopBackground></TopBackground>
        <Title>
          <PT>Mis</PT> Postulaciones
        </Title>
        <CardContainer>
          {postulations.map((el) => (
            <PostCard
              key={el.postId}
              postId={el.postId}
              applicantId={el.applicantId}
              state={el.state}
              created_at={el.created_at}
              post={el.post}
            />
          ))}
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
    </>
  );
};

export default UserPostulations;
