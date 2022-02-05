import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPosts} from "../../redux/actions/actionCreators";
import PostsContainer from "../PostsContainer";
import PostsNavBar from "../PostsNavBar";
import {MainDiv} from "./Styles";

export const CompanyPosts = () => {
  const companyId = useSelector(
    (state: any) => state.companyReducer.companyDetail.id
  );
  const posts = useSelector((state: any) => state.postsReducer.posts);

  const dispatch = useDispatch();
  if (companyId) {
    let companyPosts = posts.filter(
      (post: any) => post.companyId === companyId
    );
    dispatch(setCurrentPosts(companyPosts));
  }
  return (
    <MainDiv>
      <PostsNavBar />
      <PostsContainer />
    </MainDiv>
  );
};
