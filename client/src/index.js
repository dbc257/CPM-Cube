import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import BaseLayout from "./containers/BaseLayout";
import ChartPage from "./components/ChartPage";
import ChartsPageProfitFB2019 from "./components/ChartsPageProfitFB2019";
import ChartsPageProfitFB2018 from "./components/ChartsPageProfitFB2018";
import ChartsPageProfitFB2017 from "./components/ChartsPageProfitFB2017";
import ChartsPageExpensesFB2019 from "./components/ChartsPageExpensesFB2019";
import ChartsPageExpensesFB2018 from "./components/ChartsPageExpensesFB2018";
import ChartsPageExpensesFB2017 from "./components/ChartsPageExpensesFB2017";
import ChartsPageRevenueFB2019 from "./components/ChartsPageRevenueFB2019";
import ChartsPageRevenueFB2018 from "./components/ChartsPageRevenueFB2018";
import ChartsPageRevenueFB2017 from "./components/ChartsPageRevenueFB2017";

// import ChartsPageExpenses from "./components/ChartsPageExpenses";
// import ChartsPageRevenue from "./components/ChartsPageRevenue";
import CubePage from "./components/cubePage/CubePage";
import CubePageButtons from "./components/cubePage/CubePageButtons";
import AboutUs from "./components/AboutUs";
import LoginPage from "./components/LoginPage";
import { setAuthenticationHeader } from "./utils/Auth";
import thunk from "redux-thunk";
// import FinanceAPI from "./components/FinanceAPI";
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
            <Route component={CubePage} path="/cube" exact />
            <Route component={AboutUs} path="/about-us" exact />
            <Route component={CubePageButtons} path="/cube-buttons" exact />
            <Route exact path="/charts-data" component={ChartPage} />
            <Route
              exact
              path="/facebook/charts-profit-fb2019"
              component={ChartsPageProfitFB2019}
            />
            <Route
              exact
              path="/facebook/charts-profit-fb2018"
              component={ChartsPageProfitFB2018}
            />
            <Route
              exact
              path="/facebook/charts-profit-fb2017"
              component={ChartsPageProfitFB2017}
            />
            <Route
              exact
              path="/facebook/charts-expenses-fb2019"
              component={ChartsPageExpensesFB2019}
            />
            <Route
              exact
              path="/facebook/charts-expenses-fb2018"
              component={ChartsPageExpensesFB2018}
            />
            <Route
              exact
              path="/facebook/charts-expenses-fb2017"
              component={ChartsPageExpensesFB2017}
            />
            <Route
              exact
              path="/facebook/charts-revenue-fb2019"
              component={ChartsPageRevenueFB2019}
            />
            <Route
              exact
              path="/facebook/charts-revenue-fb2018"
              component={ChartsPageRevenueFB2018}
            />
            <Route
              exact
              path="/facebook/charts-revenue-fb2018"
              component={ChartsPageRevenueFB2017}
            />
            {/* <Route exact path="/charts-revenue" component={ChartsPageRevenue} /> */}
            {/* <Route exact path="/charts" component={requireAuth(ChartsPage)} /> */}
            <Route component={App} path="/" exact />
            {/* <Route component={FinanceAPI} path="/finance-api" exact /> */}
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
