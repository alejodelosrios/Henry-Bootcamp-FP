import { Routes, Route, Navigate } from "react-router";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { Profile } from "./pages/Profile";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import CreatePostPage from "./pages/CreatePostPage";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from "./redux/actions/public/generalActions";
import { getPosts } from "./redux/actions/public/postsActions";
import LoginPage from "./pages/LoginPage";
import { PostDetailPage } from "./pages/PostDetail";
import ChooseRoleModal from "./components/ChooseRoleModal";
import AboutUs from "./pages/AboutUs/AboutUs";
import UserPostulations from "./pages/MyPostulations/UserPostulations";
import QandA from "./pages/Q&A/QandA";
import CompanyProfile from "./components/CompanyProfile/CompanyProfile";
import EditCompanyProfile from "./components/EditCompanyProfile/EditCompanyProfile";
import CompanyJobPosts from "./components/CompanyJobPosts";
import CompanyPostDetail from "./components/CompanyPostDetail";
import PremiumPage from "./pages/Premium Access/PremiumPage";
import Storage from "./services/storage";
import Perfil from "./pages/AdminPages/Perfil";
import Categories from "./pages/AdminPages/Categories";
import Users from "./pages/AdminPages/Users";
import News from "./pages/AdminPages/News";

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const dispatch = useDispatch();
  const role = useSelector((state: any) => state.userReducer.role);
  const email = useSelector((state: any) => state.userReducer.email);

  const token = Storage.get("token");
  useEffect(() => {
    if (token) {
      dispatch(getUser());
    }

    const getUserGoogle = () => {
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
          if (!resObject.user.role) {
            setUserLogged(resObject.user);
            let userData = {
              email: resObject.user.emails[0].value,
              password: resObject.user.id,
            };
            dispatch(setUser(userData));
          } else {
            dispatch(setUser(resObject.user));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUserGoogle();
    dispatch(getPosts());
  }, []);
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
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
        <Route path="/reset-password" element={<LoginPage type="reset" />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/frequent-questions" element={<QandA />} />
        <Route path="/company/:companyId" element={<CompanyProfile />} />
        <Route path="/company/posts" element={<CompanyJobPosts />} />
        <Route
          path="/company/posts/:postId/detail"
          element={<CompanyPostDetail />}
        />
        <Route
          path="/edit-company/:companyId"
          element={<EditCompanyProfile />}
        />
        <Route path="/company/premium/:companyId" element={<PremiumPage />} />
        <Route
          path="/company/posts/:postId/detail/applicant/:applicantId"
          element={<Profile user={userLogged} />}
        />
        <Route path="/admin" element={<Profile user={userLogged} />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/news" element={<News />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
