import React from "react";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
// import { withRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Container from "react-bootstrap/Container";
import * as actionCreators from "../../../store/creators/actionCreators";
import CsvParse from "./CsvParse";
// import "./CubePage.scss";
import "../../css/CubePageButtons.css";

function CubePage(props) {
  const FB = "FB";
  const AAPL = "AAPL";
  // const AAL = "AAL";
  const TSLA = "TSLA";
  // const AMZN = "AMZN";
  // const COST = "COST";
  // const MNST = "MNST";
  // const ZN = "ZN";
  // const MSFT = "MSFT";

  const handleClick = (e) => {
    props.onButtonChoice(e);
  };

  return (
    <div className="cube-container">
      <div className="cube-wrapper">
        {/* <br /> */}
        <div>
          <h4>The Business Intelligence Cube (BIC)</h4>
        </div>
        {/* <br /> */}
      </div>
      <div>
        <ButtonGroup justified>
          <LinkContainer to="/facebook/charts-fb">
            <Button
              onClick={() => handleClick(FB)}
              variant="success"
              bsSize="large"
            >
              Facebook 2019-2017
            </Button>
          </LinkContainer>
          <LinkContainer to="/apple/charts-aapl">
            <Button
              onClick={() => handleClick(AAPL)}
              variant="warning"
              bsSize="large"
            >
              Apple, Inc. 2019-2017
            </Button>
          </LinkContainer>

          <LinkContainer to="/tesla/charts-tsla">
            <Button
              onClick={() => handleClick(TSLA)}
              variant="danger"
              bsSize="large"
            >
              Tesla, Inc. 2019-2017
            </Button>
          </LinkContainer>
        </ButtonGroup>
      </div>
      <br />
      <div>
        <ButtonGroup vertical>
          <ButtonGroup>
            <LinkContainer
              to="/facebook/charts-profit-fb2019"
              // to="/fb-profit-charts-2019"
              onClick={() => handleClick(FB)}
            >
              <Button type="button" variant="success" bsSize="large">
                Facebook - Profit - 2019
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/facebook/charts-profit-fb2018"
              // to="/fb-profit-charts-2019"
              onClick={() => handleClick(FB)}
            >
              <Button type="button" variant="success" bsSize="large">
                Facebook - Profit - 2018
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/facebook/charts-profit-fb2017"
              // to="/fb-profit-charts-2018"
              onClick={() => handleClick(FB)}
            >
              <Button type="button" variant="success" bsSize="large">
                Facebook - Profit - 2017
              </Button>
            </LinkContainer>
          </ButtonGroup>

          <ButtonGroup>
            <LinkContainer
              to="/facebook/charts-expenses-fb2019"
              onClick={() => handleClick(FB)}
            >
              <Button type="button" variant="warning" bsSize="large">
                Facebook - Expenses - 2019
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/facebook/charts-expenses-fb2018"
              onClick={() => handleClick(FB)}
            >
              <Button type="button" variant="warning" bsSize="large">
                Facebook - Expenses - 2018
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/facebook/charts-expenses-fb2017"
              onClick={() => handleClick(FB)}
            >
              <Button type="button" variant="warning" bsSize="large">
                Facebook - Expenses - 2017
              </Button>
            </LinkContainer>
          </ButtonGroup>

          <ButtonGroup>
            <LinkContainer
              to="/facebook/charts-revenue-fb2019"
              onClick={() => handleClick(FB)}
            >
              <Button type="button" variant="danger" bsSize="large">
                Facebook - Revenue - 2019
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/facebook/charts-revenue-fb2018"
              onClick={() => handleClick(FB)}
            >
              <Button type="button" variant="danger" bsSize="large">
                Facebook - Revenue - 2018
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/facebook/charts-revenue-fb2017"
              onClick={() => handleClick(FB)}
            >
              <Button type="button" variant="danger" bsSize="large">
                Facebook - Revenue - 2017
              </Button>
            </LinkContainer>
          </ButtonGroup>
        </ButtonGroup>
      </div>
      <br />
      <div>
        <ButtonGroup vertical>
          <ButtonGroup>
            <LinkContainer
              to="/apple/charts-profit-aapl2019"
              onClick={() => handleClick(AAPL)}
            >
              <Button type="button" variant="success" bsSize="large">
                Apple, Inc. - Profit - 2019
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/apple/charts-profit-aapl2018"
              onClick={() => handleClick(AAPL)}
            >
              <Button type="button" variant="success" bsSize="large">
                Apple, Inc. - Profit - 2018
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/apple/charts-profit-aapl2017"
              onClick={() => handleClick(AAPL)}
            >
              <Button type="button" variant="success" bsSize="large">
                Apple, Inc. - Profit - 2017
              </Button>
            </LinkContainer>
          </ButtonGroup>

          <ButtonGroup>
            <LinkContainer
              to="/apple/charts-expenses-aapl2019"
              onClick={() => handleClick(AAPL)}
            >
              <Button type="button" variant="warning" bsSize="large">
                Apple, Inc. - Expenses - 2019
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/apple/charts-expenses-aapl2018"
              onClick={() => handleClick(AAPL)}
            >
              <Button type="button" variant="warning" bsSize="large" k>
                Apple, Inc. - Expenses - 2018
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/apple/charts-expenses-aapl2017"
              onClick={() => handleClick(AAPL)}
            >
              <Button type="button" variant="warning" bsSize="large">
                Apple, Inc. - Expenses - 2017
              </Button>
            </LinkContainer>
          </ButtonGroup>

          <ButtonGroup>
            <LinkContainer
              to="/apple/charts-revenue-aapl2019"
              onClick={() => handleClick(AAPL)}
            >
              <Button type="button" variant="danger" bsSize="large">
                Apple, Inc. - Revenue - 2019
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/apple/charts-revenue-aapl2018"
              onClick={() => handleClick(AAPL)}
            >
              <Button type="button" variant="danger" bsSize="large">
                Apple, Inc. - Revenue - 2018
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/apple/charts-revenue-aapl2017"
              onClick={() => handleClick(AAPL)}
            >
              <Button type="button" variant="danger" bsSize="large">
                Apple, Inc. - Revenue - 2017
              </Button>
            </LinkContainer>
          </ButtonGroup>
        </ButtonGroup>
      </div>
      <br />
      <div>
        <ButtonGroup vertical>
          <ButtonGroup>
            <LinkContainer
              to="/tesla/charts-profit-tsla2019"
              onClick={() => handleClick(TSLA)}
            >
              <Button type="button" variant="success" bsSize="large">
                Tesla, Inc. - Profit - 2019
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/tesla/charts-profit-tsla2018"
              onClick={() => handleClick(TSLA)}
            >
              <Button type="button" variant="success" bsSize="large">
                Tesla, Inc. - Profit - 2018
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/tesla/charts-profit-tsla2017"
              onClick={() => handleClick(TSLA)}
            >
              <Button type="button" variant="success" bsSize="large">
                Tesla, Inc. - Profit - 2017
              </Button>
            </LinkContainer>
          </ButtonGroup>

          <ButtonGroup>
            <LinkContainer
              to="/tesla/charts-expenses-tsla2019"
              onClick={() => handleClick(TSLA)}
            >
              <Button type="button" variant="warning" bsSize="large">
                Tesla, Inc. - Expenses - 2019
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/tesla/charts-expenses-tsla2018"
              onClick={() => handleClick(TSLA)}
            >
              <Button type="button" variant="warning" bsSize="large">
                Tesla, Inc. - Expenses - 2018
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/tesla/charts-expenses-tsla2017"
              onClick={() => handleClick(TSLA)}
            >
              <Button type="button" variant="warning" bsSize="large">
                Tesla, Inc. - Expenses - 2017
              </Button>
            </LinkContainer>
          </ButtonGroup>

          <ButtonGroup>
            <LinkContainer
              to="/tesla/charts-revenue-tsla2019"
              onClick={() => handleClick(TSLA)}
            >
              <Button type="button" variant="danger" bsSize="large">
                Tesla, Inc. - Revenue - 2019
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/tesla/charts-revenue-tsla2018"
              onClick={() => handleClick(TSLA)}
            >
              <Button type="button" variant="danger" bsSize="large">
                Tesla, Inc. - Revenue - 2018
              </Button>
            </LinkContainer>
            <LinkContainer
              to="/tesla/charts-revenue-tsla2017"
              onClick={() => handleClick(TSLA)}
            >
              <Button type="button" variant="danger" bsSize="large">
                Tesla, Inc. - Revenue - 2017
              </Button>
            </LinkContainer>
          </ButtonGroup>
        </ButtonGroup>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonChoice: (chosenOrganization) =>
      dispatch(actionCreators.buttonChosen(chosenOrganization)),
  };
};

export default connect(null, mapDispatchToProps)(CubePage);
