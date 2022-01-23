import { Routes, Route, Navigate } from "react-router";

import WelcomePage from "./pages/WelcomePage/WelcomePage";

import styled from "styled-components";
import { UserProfile } from "./pages/UserProfile";
import Home from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { useEffect, useState } from "react";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import { PostDetailPage } from "./pages/PostDetail";
import Post from "./components/Post";
import CreatePostPage from "./pages/CreatePostPage";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/actionCreators";
import LoginPage from "./pages/LoginPage";

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const dispatch = useDispatch();

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
          setUserLogged(resObject.user);
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
      <NavBar userLogged={userLogged} />
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/profile"
          element={<UserProfile user={userLogged} />}
        ></Route>
        <Route path="/post-detail/:id" element={<PostDetailPage />}></Route>
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
