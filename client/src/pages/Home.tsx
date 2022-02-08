import SearchBar from "../components/SearchBar";
import FilterUser from "../components/FilterUser";
import PostsNavBar from "../components/PostsNavBar";
import PostsContainer from "../components/PostsContainer";
import styled from "styled-components";
import HomeLayout from "./HomeLayout";
import OutstandingCompany from "../components/OutstandingCompany";

const Container = styled.div`
  margin: auto;
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-bottom: 10vw;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Sidebar = styled.aside`
  width: 20%;
  height: 100%;
  padding: 3.25rem 0;
`;
const RightSidebar = styled.div`
  width: 20%;
  height: 100%;
  padding: 3.25rem 0;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
`;
const SidebarTitle = styled.aside`
  font-family: ${p => p.theme.colors.typography.poppins};
  color: grey;
  font-style: normal;
  text-align: center;
  font-weight: bold;
  font-size: 2vw;
  line-height: 2.2vw;
  letter-spacing: -0.02em;
`;
const PostSection = styled.div`
  width: 80%;
  height: 100%;
  margin: 0;
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
            <SidebarTitle>
              Empresas
              <br />
              Destacadas
            </SidebarTitle>
            <OutstandingCompany />
          </RightSidebar>
        </Content>
      </Container>
    </HomeLayout>
  );
};

export default Home;
