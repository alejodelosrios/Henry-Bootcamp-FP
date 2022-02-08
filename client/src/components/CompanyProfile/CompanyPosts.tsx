import PostsContainer from "../PostsContainer";
import PostsNavBar from "../PostsNavBar";
import {MainDiv} from "./Styles";

export const CompanyPosts = () => {
  return (
    <MainDiv>
      <PostsNavBar />
      <PostsContainer />
    </MainDiv>
  );
};
