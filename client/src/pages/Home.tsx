import SearchBar from "../components/SearchBar";
// import { NavBar } from '../components/NavBar'
import { Link } from "react-router-dom";

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
      <span>{"<CompanyFilter/>"} Component</span>
      <span>{"<PostsContainer/>"} Component</span>
    </>
  );
};

export default Home;
