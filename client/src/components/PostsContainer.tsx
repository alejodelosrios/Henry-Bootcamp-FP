import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/actionCreators";
import Post from "./Post";

const PostsContainer = () => {
  const currentPosts = useSelector(
    (state: any) => state.postsReducer.currentPosts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      {currentPosts.map((post: any) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          location={post.location}
          modality={post.modality}
          salary={post.salary}
          startDate={post.startDate}
        />
      ))}
    </div>
  );
};

export default PostsContainer;

//experience={post.experience}
