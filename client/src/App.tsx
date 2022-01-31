import { Routes, Route, Navigate } from "react-router";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { Profile } from "./pages/Profile";
import Home from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { useEffect, useState } from "react";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import CreatePostPage from "./pages/CreatePostPage";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, setUser } from "./redux/actions/actionCreators";
import LoginPage from "./pages/LoginPage";
import { PostDetailPage } from "./pages/PostDetail";
import ChooseRoleModal from "./components/ChooseRoleModal";
import AboutUs from "./pages/AboutUs/AboutUs";
import UserPostulations from "./pages/MyPostulations/UserPostulations";
import QandA from "./pages/Q&A/QandA";
import CompanyProfile from "./components/CompanyProfile/CompanyProfile";

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const dispatch = useDispatch();
  const role = useSelector((state: any) => state.userReducer.role);
  const email = useSelector((state: any) => state.userReducer.email);

  useEffect(() => {
    const getUser = () => {
      fetch(`${process.env.REACT_APP_GOOGLE}/auth/login/success`, {
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
          // console.log("Respuesta: ", resObject);
          if (!resObject.user.role) {
            //console.log("Set Email", resObject.user);
            setUserLogged(resObject.user);
            let userData = {
              email: resObject.user.emails[0].value,
              password: resObject.user.id,
            };
            dispatch(setUser(userData));
          } else {
            // console.log("SetUser");
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
        {!role && email && (
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
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<Profile user={userLogged} />} />
        <Route
          path="/company/:companyId/post/:postId"
          element={<PostDetailPage />}
        />
        <Route
          path="/company/:companyId/post/:postId/edit"
          element={<CreatePostPage mode="edit" />}
        />
        <Route path="/create-post" element={<CreatePostPage mode="create" />} />
        <Route path="/login" element={<LoginPage type="login" />} />
        <Route path="/register" element={<LoginPage type="register" />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/frequent-questions" element={<QandA />} />
        <Route path="/company/:companyId" element={<CompanyProfile />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
