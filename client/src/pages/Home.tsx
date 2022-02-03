import SearchBar from "../components/SearchBar";
import FilterUser from "../components/FilterUser";
import PostsNavBar from "../components/PostsNavBar";
import PostsContainer from "../components/PostsContainer";
import styled from "styled-components";
import HomeLayout from "./HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPosts } from "../redux/actions/actionCreators";

const Container = styled.div`
  margin: auto;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;
const Sidebar = styled.aside`
  width: 20%;
  height: 100%;
  padding: 3.25rem 0;
`;
const RightSidebar = styled.aside`
  width: 20%;
  height: 100%;
  padding: 3.25rem 0;
`;
const SidebarTitle = styled.aside`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: -0.02em;
`;
const PostSection = styled.div`
  width: 80%;
  height: 100%;
`;
const TopBackground = styled.div`
  position: absolute;
  height: 180px;
  top: 0;
  left: 0;
  background: rgba(200, 121, 255, 0.1);
  width: 100%;
  z-index: 998;
`;

const Home = () => {
  const posts = useSelector((state: any) => state.postsReducer.posts);
  console.log("posts");
  const dispatch = useDispatch();
  dispatch(setCurrentPosts(posts));

  return (
    <HomeLayout>
      <Container>
        {/*
                <Link to={"/"}>
                Route to Post Creater
                <button>Create New Post</button>
                </Link>
            */}
        <TopBackground></TopBackground>
        <SearchBar />
        <Content>
          <Sidebar>
            <FilterUser></FilterUser>
          </Sidebar>
          <PostSection>
            <PostsNavBar></PostsNavBar>
            <PostsContainer></PostsContainer>
          </PostSection>
          <RightSidebar>
            <SidebarTitle>
              Empresas
              <br />
              destacadas
            </SidebarTitle>
          </RightSidebar>
        </Content>
      </Container>
    </HomeLayout>
  );
};

export default Home;
