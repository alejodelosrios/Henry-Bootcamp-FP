import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-37m4eh5q.us.auth0.com"
      clientId="El9e66B2UpgeMnrRcsMKikg5r1ORlqvT"
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);
