import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseLayout from "./containers/BaseLayout";
import ChartsPage from "./components/ChartsPage";
import LoginPage from "./components/LoginPage";
import { setAuthenticationHeader } from "./utils/Auth";
import requireAuth from "./components/requireAuth";

import charityReducer from "./store/reducers/charity";
import loginReducer from "./store/reducers/login";

const rootReducer = combineReducers({
  charityRed: charityReducer,
  loginRed: loginReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create a global store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const token = localStorage.getItem("jsonwebtoken");
setAuthenticationHeader(token);

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route component={LoginPage} path="/login" exact />
            {/* <Route component={ChartsPage} path="/charts" exact /> */}
            <Route component={requireAuth(ChartsPage)} path="/charts" exact />
            <Route component={App} path="/" exact />
            <Route component={LoginPage} path="/login" />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
