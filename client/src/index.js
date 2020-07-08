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
<<<<<<< HEAD
import Login from "./components/login/login";
=======
import LoginPage from "./components/LoginPage";
>>>>>>> ce20323221edeb118779b5e04ce2733963bbb1b8

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route component={LoginPage} path="/login" exact />
            <Route component={ChartsPage} path="/charts" exact />
            <Route component={App} path="/" exact />
            <Route component={Login} path="/login" />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
