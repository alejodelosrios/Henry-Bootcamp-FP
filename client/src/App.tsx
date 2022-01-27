import { Routes, Route, Navigate, useNavigate } from "react-router";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { UserProfile } from "./pages/Profile";
import Home from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { useEffect, useState } from "react";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import CreatePostPage from "./pages/CreatePostPage";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, setEmail, setUser } from "./redux/actions/actionCreators";
import LoginPage from "./pages/LoginPage";
import { PostDetailPage } from "./pages/PostDetail";
import ChooseRoleModal from "./components/ChooseRoleModal";
import AboutUs from "./pages/AboutUs/AboutUs";
import UserPostulations from "./components/UserPostulations";
import CompanyProfile from "./components/CompanyProfile/CompanyProfile";
import QandA from "./pages/Q&A/QandA";

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const dispatch = useDispatch();
  const roleId = useSelector((state: any) => state.userReducer.roleId);
  const email = useSelector((state: any) => state.userReducer.email);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3001/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          //console.log("Respuesta: ", resObject.user);
          if (!resObject.user.hasOwnProperty("roleId")) {
            //console.log("Set Email", resObject.user);
            setUserLogged(resObject.user);
            dispatch(setEmail(resObject.user.emails[0].value));
          } else {
            console.log("SetUser");
            dispatch(setUser(resObject.user));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();

    dispatch(getPosts());
  }, []);
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <NavBar />
      <Routes>
        {!roleId && email && (
          <>
            <Route path="/" element={<Navigate to="/select-role" />} />
            <Route
              path="/select-role"
              element={<ChooseRoleModal title="Rol" />}
            />
          </>
        )}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-applications" element={<UserPostulations />} />
        <Route path="/company-profile" element={<CompanyProfile/>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<UserProfile user={userLogged} />} />
        <Route path="/post-detail/:id" element={<PostDetailPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/login" element={<LoginPage type="login" />} />
        <Route path="/register" element={<LoginPage type="register" />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/frequent-questions" element={<QandA />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
