import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import thunk from "redux-thunk";
import { setAuthenticationHeader } from "./utils/Auth";
import ExplorePage from "./pages/ExplorePage";
import DashboardPage from "./pages/DashboardPage";

import ChartsPageProfitFB2019 from "./pages/oldChartPages/ChartsPageProfitFB2019";
import ChartsPageProfitFB2018 from "./pages/oldChartPages/ChartsPageProfitFB2018";
import ChartsPageProfitFB2017 from "./pages/oldChartPages/ChartsPageProfitFB2017";
import ChartsPageExpensesFB2019 from "./pages/oldChartPages/ChartsPageExpensesFB2019";
import ChartsPageExpensesFB2018 from "./pages/oldChartPages/ChartsPageExpensesFB2018";
import ChartsPageExpensesFB2017 from "./pages/oldChartPages/ChartsPageExpensesFB2017";
import ChartsPageRevenueFB2019 from "./pages/oldChartPages/ChartsPageRevenueFB2019";
import ChartsPageRevenueFB2018 from "./pages/oldChartPages/ChartsPageRevenueFB2018";
import ChartsPageRevenueFB2017 from "./pages/oldChartPages/ChartsPageRevenueFB2017";
import ChartsPageFB from "./pages/oldChartPages/ChartsPageFB";

import ChartsPageProfitAAPL2019 from "./pages/oldChartPages/ChartsPageProfitAAPL2019";
import ChartsPageProfitAAPL2018 from "./pages/oldChartPages/ChartsPageProfitAAPL2018";
import ChartsPageProfitAAPL2017 from "./pages/oldChartPages/ChartsPageProfitAAPL2017";
import ChartsPageExpensesAAPL2019 from "./pages/oldChartPages/ChartsPageExpensesAAPL2019";
import ChartsPageExpensesAAPL2018 from "./pages/oldChartPages/ChartsPageExpensesAAPL2018";
import ChartsPageExpensesAAPL2017 from "./pages/oldChartPages/ChartsPageExpensesAAPL2017";
import ChartsPageRevenueAAPL2019 from "./pages/oldChartPages/ChartsPageRevenueAAPL2019";
import ChartsPageRevenueAAPL2018 from "./pages/oldChartPages/ChartsPageRevenueAAPL2018";
import ChartsPageRevenueAAPL2017 from "./pages/oldChartPages/ChartsPageRevenueAAPL2017";
import ChartsPageAAPL from "./pages/oldChartPages/ChartsPageAAPL";

import ChartsPageProfitTSLA2019 from "./pages/oldChartPages/ChartsPageProfitTSLA2019";
import ChartsPageProfitTSLA2018 from "./pages/oldChartPages/ChartsPageProfitTSLA2018";
import ChartsPageProfitTSLA2017 from "./pages/oldChartPages/ChartsPageProfitTSLA2017";
import ChartsPageExpensesTSLA2019 from "./pages/oldChartPages/ChartsPageExpensesTSLA2019";
import ChartsPageExpensesTSLA2018 from "./pages/oldChartPages/ChartsPageExpensesTSLA2018";
import ChartsPageExpensesTSLA2017 from "./pages/oldChartPages/ChartsPageExpensesTSLA2017";
import ChartsPageRevenueTSLA2019 from "./pages/oldChartPages/ChartsPageRevenueTSLA2019";
import ChartsPageRevenueTSLA2018 from "./pages/oldChartPages/ChartsPageRevenueTSLA2018";
import ChartsPageRevenueTSLA2017 from "./pages/oldChartPages/ChartsPageRevenueTSLA2017";
import ChartsPageTSLA from "./pages/oldChartPages/ChartsPageTSLA";

import CubePageButtons from "./pages/CubePage/CubePageButtons"
import AboutUs from "./pages/AboutUs";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import buttonReducer from "./store/reducers/buttons";
import loginReducer from "./store/reducers/login";
// import requireAuth from "./components/utils/requireAuth";

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
    <Provider>
      <Router>
          <Switch>
          <Route key="index" exact path="/" component={DashboardPage} />
          <Route key="explore" path="/explore" component={ExplorePage} />
          <Route component={App} path="/" exact />
          <Route component={LoginPage} path="/login" exact />
          <Route component={RegisterPage} path="/register" exact />
          {/* <Route component={CubePage} path="/cube" exact /> */}
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
      </Router>
    </Provider>
  </React.StrictMode >,
  document.getElementById("root")
);