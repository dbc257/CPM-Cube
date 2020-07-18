import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import thunk from "redux-thunk";
import BaseLayout from "./containers/BaseLayout";
import { setAuthenticationHeader } from "./utils/Auth";

// import "bootstrap/dist/css/bootstrap.min.css";
// import ChartPage from "./components/pages/chartPages/ChartPage";
// import * as actionTypes from "./store/actions/actionTypes";
// import HomePage from "./components/pages/HomePage"
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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route component={App} path="/" exact />
            <Route component={LoginPage} path="/login" exact />
            <Route component={RegisterPage} path="/register" exact />
            <Route component={CubePage} path="/cube" exact />
            <Route component={AboutUs} path="/about-us" exact />
            <Route component={CubePageButtons} path="/cube-buttons" exact />
            <Route exact path="/facebook/charts-fb" component={ChartsPageFB} />
            <Route exact path="/apple/charts-aapl" component={ChartsPageAAPL} />
            <Route exact path="/tesla/charts-tsla" component={ChartsPageTSLA} />
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
              path="/facebook/charts-revenue-fb2017"
              component={ChartsPageRevenueFB2017}
            />
            <Route
              exact
              path="/apple/charts-profit-aapl2019"
              component={ChartsPageProfitAAPL2019}
            />
            <Route
              exact
              path="/apple/charts-profit-aapl2018"
              component={ChartsPageProfitAAPL2018}
            />
            <Route
              exact
              path="/apple/charts-profit-aapl2017"
              component={ChartsPageProfitAAPL2017}
            />
            <Route
              exact
              path="/apple/charts-expenses-aapl2019"
              component={ChartsPageExpensesAAPL2019}
            />
            <Route
              exact
              path="/apple/charts-expenses-aapl2018"
              component={ChartsPageExpensesAAPL2018}
            />
            <Route
              exact
              path="/apple/charts-expenses-aapl2017"
              component={ChartsPageExpensesAAPL2017}
            />
            <Route
              exact
              path="/apple/charts-revenue-aapl2019"
              component={ChartsPageRevenueAAPL2019}
            />
            <Route
              exact
              path="/apple/charts-revenue-aapl2018"
              component={ChartsPageRevenueAAPL2018}
            />
            <Route
              exact
              path="/apple/charts-revenue-aapl2017"
              component={ChartsPageRevenueAAPL2017}
            />
            <Route
              exact
              path="/tesla/charts-profit-tsla2019"
              component={ChartsPageProfitTSLA2019}
            />
            <Route
              exact
              path="/tesla/charts-profit-tsla2018"
              component={ChartsPageProfitTSLA2018}
            />
            <Route
              exact
              path="/tesla/charts-profit-tsla2017"
              component={ChartsPageProfitTSLA2017}
            />
            <Route
              exact
              path="/tesla/charts-expenses-tsla2019"
              component={ChartsPageExpensesTSLA2019}
            />
            <Route
              exact
              path="/tesla/charts-expenses-tsla2018"
              component={ChartsPageExpensesTSLA2018}
            />
            <Route
              exact
              path="/tesla/charts-expenses-tsla2017"
              component={ChartsPageExpensesTSLA2017}
            />
            <Route
              exact
              path="/tesla/charts-revenue-tsla2019"
              component={ChartsPageRevenueTSLA2019}
            />
            <Route
              exact
              path="/tesla/charts-revenue-tsla2018"
              component={ChartsPageRevenueTSLA2018}
            />
            <Route
              exact
              path="/tesla/charts-revenue-tsla2017"
              component={ChartsPageRevenueTSLA2017}
            />
            {/* <Route exact path="/charts" component={requireAuth(ChartsPage)} /> */}
            {/* <Route exact path="/chart-data" component={ChartPage} /> */}
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
