import SearchBar from "../components/SearchBar";
// import { NavBar } from '../components/NavBar'
import { Link } from "react-router-dom";
import FilterUser from "../components/FilterUser";
import PostsNavBar from "../components/PostsNavBar";
import PostsContainer from "../components/PostsContainer";

const Home = () => {
  return (
    <>
      {/* {<NavBar/>} */}
      <Link to={"/"}>
        {" "}
        {/* Route to Post Creater */}
        <button>Create New Post</button>
      </Link>
      <SearchBar />
      <aside>
        <FilterUser></FilterUser>
      </aside>
      <section>
        <PostsNavBar></PostsNavBar>
        <PostsContainer></PostsContainer>
      </section>
      <span>{"<CompanyFilter/>"} Component</span>
      <span>{"<PostsContainer/>"} Component</span>
    </>
  );
};

export default Home;
