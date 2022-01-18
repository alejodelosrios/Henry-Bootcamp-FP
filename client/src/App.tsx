import { Routes, Route } from "react-router";

import WelcomePage from "./pages/WelcomePage";

import styled from "styled-components";

function App() {
  const App = styled.div`
    margin: 20px 100px;
  `;
  return (
    <App className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
      </Routes>
    </App>
  );
}

export default App;
