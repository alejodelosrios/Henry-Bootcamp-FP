import { useDispatch, useSelector } from "react-redux";

const PostsContainer = () => {

    // Here we should work with the redux hooks and typescript..
    const dispatch = useDispatch();
    const posts = /*useSelector((state: State) => state.posts)*/
      [{
        name: 'pirulo',
        id:'pirulo',
      },{
        name: 'rosita',
        id:'rosita'
      }]; // Datos de prueba

  return (
    <ul>
        {/* This component should recieve the posts array */}
        {
          posts.map(p =>
            console.log(p)
            // <PostCard
            //   post = {p}
            //   key = {p.id}
            // />
          )
        }
    </ul>
  );
};

export default PostsContainer;