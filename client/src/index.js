import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseLayout from "./containers/BaseLayout";
import ChartsPage from "./components/ChartsPage";
import LoginPage from "./components/LoginPage";
import { setAuthenticationHeader } from "./utils/Auth";
import requireAuth from "./components/requireAuth";
import thunk from "redux-thunk";
// import * as actionTypes from "./store/actions/actionTypes";

import buttonReducer from "./store/reducers/buttons";
import loginReducer from "./store/reducers/login";
// import reducer from "./store/reducer";
// let store = createStore(reducer);

const rootReducer = combineReducers({
  buttonRed: buttonReducer,
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
// store.dispatch({
//   type: actionTypes.AUTHENTICATED,
//   value: token !== null,
// });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <BaseLayout>
          <Switch>
            <Route component={LoginPage} path="/login" exact />
            {/* <Route component={ChartsPage} path="/charts" exact /> */}
            <Route exact path="/charts" component={requireAuth(ChartsPage)} />
            <Route component={App} path="/" exact />
            <Route component={LoginPage} path="/login" />
          </Switch>
        </BaseLayout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
