import SearchBar from "../Components/SearchBar";
// import { NavBar } from '../components/NavBar'
import { Link } from "react-router-dom";
import FilterUser from "../Components/FilterUser";
import PostsNavBar from "../Components/PostsNavBar";
import PostsContainer from "../Components/PostsContainer";

const Home = () => {
  return (
    <>
      {/* {<NavBar/>} */}
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
      <span>{"<CompanyFilter/>"} Component</span>
      <span>{"<PostsContainer/>"} Component</span>
    </>
  );
};

export default Home;
