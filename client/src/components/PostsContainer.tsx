import { useDispatch, useSelector } from "react-redux";
import rootReducers from "../redux/reducers/rootReducer";
import Post from "./Post";

const PostsContainer = () => {
  const currentPosts = useSelector(
    (state: any) => state.postsReducer.currentPosts
  );

  // console.log(currentPosts);

  return (
    <div>
      {currentPosts.map((post: any) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          location={post.location}
          experience={post.experience}
          modality={post.modality}
          salary={post.salary}
          startDate={post.startDate}
        />
      ))}
    </div>
  );
};

export default PostsContainer;
