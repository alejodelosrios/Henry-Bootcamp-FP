import SearchBar from "../components/SearchBar";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";
import PostsContainer from "../components/PostsContainer";
import FilterUser from "../components/FilterUser";
import PostsNavBar from "../components/PostsNavBar";


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
        <FilterUser></FilterUser>
      </aside>
      <section>
        <PostsNavBar></PostsNavBar>
        <PostsContainer></PostsContainer>
      </section>
    </>
  );
};

export default Home;
