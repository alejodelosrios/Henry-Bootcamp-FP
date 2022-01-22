import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_API || "http://localhost:3001/api/v1";

ReactDOM.render(
  <Auth0Provider
    domain="dev-37m4eh5q.us.auth0.com"
    clientId="El9e66B2UpgeMnrRcsMKikg5r1ORlqvT"
    redirectUri={window.location.origin}
    audience="https://dev-37m4eh5q.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);
