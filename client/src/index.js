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
import CubeChart from "./components/CubeChart";
import CubePage from "./components/cubePage/CubePage";
import AboutUs from "./components/AboutUs";
import LoginPage from "./components/LoginPage";
import { setAuthenticationHeader } from "./utils/Auth";
import thunk from "redux-thunk";
// import requireAuth from "./components/requireAuth";
// import * as actionTypes from "./store/actions/actionTypes";
// import HomePage from "./components/HomePage"

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
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route component={LoginPage} path="/login" exact />
            <Route component={CubeChart} path="/cube-chart" exact />
            <Route component={CubePage} path="/cube" exact />
            <Route component={AboutUs} path="/about-us" exact />
            <Route exact path="/charts" component={ChartsPage} />
            {/* <Route exact path="/charts" component={requireAuth(ChartsPage)} /> */}
            <Route component={App} path="/" exact />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
