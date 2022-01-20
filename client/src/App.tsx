import { Routes, Route } from "react-router";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { UserProfile } from "./pages/UserProfile";

import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path='/profile' element={<UserProfile/>}></Route>
      </Routes>
    </ThemeProvider>
    
  );
}

export default App;
