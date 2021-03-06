import SearchBar from "../components/SearchBar";
import FilterUser from "../components/FilterUser";
import PostsNavBar from "../components/PostsNavBar";
import PostsContainer from "../components/PostsContainer";
import styled from "styled-components";
import HomeLayout from "./HomeLayout";
import OutstandingCompany from "../components/OutstandingCompany";

const Container = styled.div`
  margin: auto;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 89px);
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
`;
const Sidebar = styled.aside`
  width: 20%;
  height: 100%;
`;
const RightSidebar = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
`;
const SidebarTitle = styled.aside`
  font-family: ${(p) => p.theme.colors.typography.poppins};
  color: grey;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  /* font-weight: bold; */
  font-size: 1.2rem;
  letter-spacing: -0.02em;
`;
const PostSection = styled.div`
  padding: 0 2rem;
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
            <SidebarTitle>Empresas Destacadas</SidebarTitle>
            <OutstandingCompany />
          </RightSidebar>
        </Content>
      </Container>
    </HomeLayout>
  );
};

export default Home;
