import { Routes, Route, Navigate } from "react-router";

import WelcomePage from "./pages/WelcomePage";

import styled from "styled-components";
import { UserProfile } from "./pages/UserProfile";
import Home from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { useEffect, useState } from "react";

function App() {
  const App = styled.div`
    margin: 20px 100px;
  `;
  const [userLogged, setUserLogged] = useState(false)

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
        },
      }).then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('Authentication has been failed')
      }).then(resObject => {
        setUserLogged(resObject.user)
      }).catch(err => {
        console.log(err)
      });
      getUser();
    }
  }, [])
  return (
    <App className="App">
      <NavBar userLogged={userLogged}/>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path='/profile'
          element={ userLogged ? <UserProfile /> : <Navigate to='/login'/> }
        ></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </App>
  );
}

export default App;