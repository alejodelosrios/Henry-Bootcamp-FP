import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_API || "https://transforma-server-u5det.ondigitalocean.app/api/v2";
  // process.env.REACT_APP_API || "http://localhost:3001/api/v2";

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
