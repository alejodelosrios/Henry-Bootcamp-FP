import SearchBar from "../components/SearchBar";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";
import PostsContainer from "../components/PostsContainer";

const Home = () => {
  return (
    <>
      {<NavBar />}
      <Link to={"/"}>
        {" "}
        {/* Route to Post Creater */}
        <button>Create New Post</button>
      </Link>
      <SearchBar /> {/* <-- Finish SB component!! */}
      <aside>
        <span>{"<CompanyFilter/>"} Component</span>
      </aside>
      <section>
        <span>{"<PostsContainer/>"} Component</span>
        <PostsContainer></PostsContainer>
      </section>
    </>
  );
};

export default Home;
