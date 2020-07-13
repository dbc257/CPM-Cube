import React from "react";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
// import { withRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import * as actionCreators from "../../store/creators/actionCreators";
// import "./CubePage.scss";
import "./CubePageButtons.css";

function CubePage(props) {
  // {pass in props onclick}

  // const emojis = [
  //   ["🐳", "Facebook", "FB"],
  //   ["🐋", "Apple Inc.", "APPL"],
  //   ["🐬", "American Airlines Group Inc.", "AAL"],
  //   ["🐟", "Tesla, Inc.", "TSLA"],
  //   ["🐠", "Amazon.com, Inc.", "AMZN"],
  //   ["🐡", "Costco Wholesale Corporation", "COST"],
  //   ["🦈", "Monster Beverage Corporation", "MNST"],
  //   ["🐙", "Zion Oil & Gas, Inc.", "ZN"],
  //   ["🐚", "Microsoft Corporation", "MSFT"],
  // ];

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
    // props.buttonChoice(emoji);
    console.log(e);
    // props.history.push("/charts");
  };

  // emojis.map((e) => e[0]);
  return (
    <>
      <div className="wrapper">
        <div>
          <div>
            <ButtonGroup vertical>
              <ButtonGroup bsSize="large">
                <LinkContainer
                  to="/fb-profit-charts-2019"
                  onClick={() => handleClick(FB)}
                >
                  <Button type="button" variant="success">
                    Facebook - Profit - 2019
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/fb-profit-charts-2019"
                  onClick={() => handleClick(FB)}
                >
                  <Button type="button" variant="success">
                    Facebook - Profit - 2018
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/fb-profit-charts-2018"
                  onClick={() => handleClick(FB)}
                >
                  <Button type="button" variant="success">
                    Facebook - Profit - 2017
                  </Button>
                </LinkContainer>
              </ButtonGroup>

              <ButtonGroup bsSize="large">
                <LinkContainer
                  to="/fb-expense-charts-2019"
                  onClick={() => handleClick(FB)}
                >
                  <Button type="button" variant="warning">
                    Facebook - Expenses - 2019
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/fb-expense-charts-2018"
                  onClick={() => handleClick(FB)}
                >
                  <Button type="button" variant="warning">
                    Facebook - Expenses - 2018
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/fb-expense-charts-2017"
                  onClick={() => handleClick(FB)}
                >
                  <Button type="button" variant="warning">
                    Facebook - Expenses - 2017
                  </Button>
                </LinkContainer>
              </ButtonGroup>

              <ButtonGroup bsSize="large">
                <LinkContainer
                  to="/fb-revenue-charts-2019"
                  onClick={() => handleClick(FB)}
                >
                  <Button type="button" variant="danger">
                    Facebook - Revenue - 2019
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/fb-revenue-charts-2018"
                  onClick={() => handleClick(FB)}
                >
                  <Button type="button" variant="danger">
                    Facebook - Revenue - 2018
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/fb-revenue-charts-2017"
                  onClick={() => handleClick(FB)}
                >
                  <Button type="button" variant="danger">
                    Facebook - Revenue - 2017
                  </Button>
                </LinkContainer>
              </ButtonGroup>
            </ButtonGroup>

            {/* <div>
              <LinkContainer
                to="/fb-profit-charts-2019"
                onClick={() => handleClick(FB)}
              >
                <Button type="button" variant="success">
                  Facebook - Profit - 2019
                </Button>
              </LinkContainer>
            </div> */}
            {/* <div>
              <LinkContainer
                to="/fb-expense-charts-2019"
                onClick={() => handleClick(FB)}
              >
                <Button type="button" variant="warning">
                  Facebook - Expenses - 2019
                </Button>
              </LinkContainer>
            </div> */}
            {/* <div>
              <LinkContainer
                to="/fb-revenue-charts-2019"
                onClick={() => handleClick(FB)}
              >
                <Button type="button" variant="danger">
                  Facebook - Revenue - 2019
                </Button>
              </LinkContainer>
            </div> */}
          </div>
          <br />

          <div>
            <ButtonGroup vertical>
              <ButtonGroup bsSize="large">
                <LinkContainer
                  to="/appl-profit-charts-2019"
                  onClick={() => handleClick(AAPL)}
                >
                  <Button type="button" variant="success">
                    Apple, Inc. - Profit - 2019
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/appl-profit-charts-2018"
                  onClick={() => handleClick(AAPL)}
                >
                  <Button type="button" variant="success">
                    Apple, Inc. - Profit - 2018
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/appl-profit-charts-2017"
                  onClick={() => handleClick(AAPL)}
                >
                  <Button type="button" variant="success">
                    Apple, Inc. - Profit - 2017
                  </Button>
                </LinkContainer>
              </ButtonGroup>

              <ButtonGroup bsSize="large">
                <LinkContainer
                  to="/appl-expense-charts-2019"
                  onClick={() => handleClick(AAPL)}
                >
                  <Button type="button" variant="warning">
                    Apple, Inc. - Expenses - 2019
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/appl-expense-charts-2018"
                  onClick={() => handleClick(AAPL)}
                >
                  <Button type="button" variant="warning">
                    Apple, Inc. - Expenses - 2018
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/appl-expense-charts-2017"
                  onClick={() => handleClick(AAPL)}
                >
                  <Button type="button" variant="warning">
                    Apple, Inc. - Expenses - 2017
                  </Button>
                </LinkContainer>
              </ButtonGroup>

              <ButtonGroup bsSize="large">
                <LinkContainer
                  to="/appl-revenue-charts-2019"
                  onClick={() => handleClick(AAPL)}
                >
                  <Button type="button" variant="danger">
                    Apple, Inc. - Revenue - 2019
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/appl-revenue-charts-2018"
                  onClick={() => handleClick(AAPL)}
                >
                  <Button type="button" variant="danger">
                    Apple, Inc. - Revenue - 2018
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/appl-revenue-charts-2017"
                  onClick={() => handleClick(AAPL)}
                >
                  <Button type="button" variant="danger">
                    Apple, Inc. - Revenue - 2017
                  </Button>
                </LinkContainer>
              </ButtonGroup>
            </ButtonGroup>
          </div>

          <br />

          <div>
            <ButtonGroup vertical>
              <ButtonGroup bsSize="large">
                <LinkContainer
                  to="/tsla-profit-charts-2019"
                  onClick={() => handleClick(TSLA)}
                >
                  <Button type="button" variant="success">
                    Tesla, Inc. - Profit - 2019
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/tsla-profit-charts-2018"
                  onClick={() => handleClick(TSLA)}
                >
                  <Button type="button" variant="success">
                    Tesla, Inc. - Profit - 2018
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/tsla-profit-charts-2017"
                  onClick={() => handleClick(TSLA)}
                >
                  <Button type="button" variant="success">
                    Tesla, Inc. - Profit - 2017
                  </Button>
                </LinkContainer>
              </ButtonGroup>

              <ButtonGroup bsSize="large">
                <LinkContainer
                  to="/tsla-expense-charts-2019"
                  onClick={() => handleClick(TSLA)}
                >
                  <Button type="button" variant="warning">
                    Tesla, Inc. - Expenses - 2019
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/tsla-expense-charts-2018"
                  onClick={() => handleClick(TSLA)}
                >
                  <Button type="button" variant="warning">
                    Tesla, Inc. - Expenses - 2018
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/tsla-expense-charts-2017"
                  onClick={() => handleClick(TSLA)}
                >
                  <Button type="button" variant="warning">
                    Tesla, Inc. - Expenses - 2017
                  </Button>
                </LinkContainer>
              </ButtonGroup>

              <ButtonGroup bsSize="large">
                <LinkContainer
                  to="/tsla-revenue-charts-2019"
                  onClick={() => handleClick(TSLA)}
                >
                  <Button type="button" variant="danger">
                    Tesla, Inc. - Revenue - 2019
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/tsla-revenue-charts-2018"
                  onClick={() => handleClick(TSLA)}
                >
                  <Button type="button" variant="danger">
                    Tesla, Inc. - Revenue - 2018
                  </Button>
                </LinkContainer>
                <LinkContainer
                  to="/tsla-revenue-charts-2017"
                  onClick={() => handleClick(TSLA)}
                >
                  <Button type="button" variant="danger">
                    Tesla, Inc. - Revenue - 2017
                  </Button>
                </LinkContainer>
              </ButtonGroup>
            </ButtonGroup>

            {/* <div>
              <LinkContainer
                to="/appl-profit-charts-2019"
                onClick={() => handleClick(AAPL)}
              >
                <Button type="button" variant="success">
                  Apple, Inc. - Profit - 2019
                </Button>
              </LinkContainer>
            </div> */}
            {/* <div>
              <LinkContainer
                to="/appl-expense-charts-2019"
                onClick={() => handleClick(AAPL)}
              >
                <Button type="button" variant="warning">
                  Apple, Inc. - Expenses - 2019
                </Button>
              </LinkContainer>
            </div> */}
            {/* <div>
              <LinkContainer
                to="/appl-revenue-charts-2019"
                onClick={() => handleClick(AAPL)}
              >
                <Button type="button" variant="danger">
                  Apple, Inc. - Revenue - 2019
                </Button>
              </LinkContainer>
            </div> */}
          </div>
          {/* <br />
          <div> */}
          {/* <div>
              <LinkContainer
                to="/tsla-profit-charts-2019"
                onClick={() => handleClick(TSLA)}
              >
                <Button type="button" variant="success">
                  Tesla, Inc. - Profit - 2019
                </Button>
              </LinkContainer>
            </div> */}
          {/* <div>
              <LinkContainer
                to="/tsla-expense-charts-2019"
                onClick={() => handleClick(TSLA)}
              >
                <Button type="button" variant="warning">
                  Tesla, Inc. - Expenses - 2019
                </Button>
              </LinkContainer>
            </div> */}
          {/* <div>
              <LinkContainer
                to="/tsla-revenue-charts-2019"
                onClick={() => handleClick(TSLA)}
              >
                <Button type="button" variant="danger">
                  Tesla, Inc. - Revenue - 2019
                </Button>
              </LinkContainer>
            </div> */}
          {/* </div>
        </div>
        <div>
          <div> */}
          {/* <div>
              <LinkContainer
                to="/fb-profit-charts-2019"
                onClick={() => handleClick(FB)}
              >
                <Button type="button" variant="success">
                  Facebook - Profit - 2018
                </Button>
              </LinkContainer>
            </div> */}
          {/* <div>
              <LinkContainer
                to="/fb-expense-charts-2018"
                onClick={() => handleClick(FB)}
              >
                <Button type="button" variant="warning">
                  Facebook - Expenses - 2018
                </Button>
              </LinkContainer>
            </div> */}
          {/* <div>
              <LinkContainer
                to="/fb-revenue-charts-2018"
                onClick={() => handleClick(FB)}
              >
                <Button type="button" variant="danger">
                  Facebook - Revenue - 2018
                </Button>
              </LinkContainer>
            </div> */}
        </div>
        <br />
        <div>
          {/* <div>
              <LinkContainer
                to="/appl-profit-charts-2018"
                onClick={() => handleClick(AAPL)}
              >
                <Button type="button" variant="success">
                  Apple, Inc. - Profit - 2018
                </Button>
              </LinkContainer>
            </div> */}
          {/* <div>
              <LinkContainer
                to="/appl-expense-charts-2018"
                onClick={() => handleClick(AAPL)}
              >
                <Button type="button" variant="warning">
                  Apple, Inc. - Expenses - 2018
                </Button>
              </LinkContainer>
            </div> */}
          {/* <div>
              <LinkContainer
                to="/appl-revenue-charts-2018"
                onClick={() => handleClick(AAPL)}
              >
                <Button type="button" variant="danger">
                  Apple, Inc. - Revenue - 2018
                </Button>
              </LinkContainer>
            </div> */}
          {/* </div>
          <br />
          <div> */}
          {/* <div>
              <LinkContainer
                to="/tsla-profit-charts-2018"
                onClick={() => handleClick(TSLA)}
              >
                <Button type="button" variant="success">
                  Tesla, Inc. - Profit - 2018
                </Button>
              </LinkContainer>
            </div> */}
          {/* <div>
              <LinkContainer
                to="/tsla-expense-charts-2018"
                onClick={() => handleClick(TSLA)}
              >
                <Button type="button" variant="warning">
                  Tesla, Inc. - Expenses - 2018
                </Button>
              </LinkContainer>
            </div> */}
          {/* <div>
              <LinkContainer
                to="/tsla-revenue-charts-2018"
                onClick={() => handleClick(TSLA)}
              >
                <Button type="button" variant="danger">
                  Tesla, Inc. - Revenue - 2018
                </Button>
              </LinkContainer>
            </div> */}
          {/* </div>
        </div>
        <div>
          <div> */}
          {/* <div>
              <LinkContainer
                to="/fb-profit-charts-2018"
                onClick={() => handleClick(FB)}
              >
                <Button type="button" variant="success">
                  Facebook - Profit - 2017
                </Button>
              </LinkContainer>
            </div> */}
          {/* <div>
              <LinkContainer
                to="/fb-expense-charts-2017"
                onClick={() => handleClick(FB)}
              >
                <Button type="button" variant="warning">
                  Facebook - Expenses - 2017
                </Button>
              </LinkContainer>
            </div> */}
          {/* <div>
              <LinkContainer
                to="/fb-revenue-charts-2017"
                onClick={() => handleClick(FB)}
              >
                <Button type="button" variant="danger">
                  Facebook - Revenue - 2017
                </Button>
              </LinkContainer>
            </div> */}
          {/* </div>
          <br />
          <div> */}
          {/* <div>
              <LinkContainer
                to="/appl-profit-charts-2017"
                onClick={() => handleClick(AAPL)}
              >
                <Button type="button" variant="success">
                  Apple, Inc. - Profit - 2017
                </Button>
              </LinkContainer>
            </div> */}
          {/* <div>
              <LinkContainer
                to="/appl-expense-charts-2017"
                onClick={() => handleClick(AAPL)}
              >
                <Button type="button" variant="warning">
                  Apple, Inc. - Expenses - 2017
                </Button>
              </LinkContainer>
            </div> */}
          {/* <div>
              <LinkContainer
                to="/appl-revenue-charts-2017"
                onClick={() => handleClick(AAPL)}
              >
                <Button type="button" variant="danger">
                  Apple, Inc. - Revenue - 2017
                </Button>
              </LinkContainer>
            </div> */}
          {/* </div>
          <br />
          <div> */}
          {/* <div>
              <LinkContainer
                to="/tsla-profit-charts-2017"
                onClick={() => handleClick(TSLA)}
              >
                <Button type="button" variant="success">
                  Tesla, Inc. - Profit - 2017
                </Button>
              </LinkContainer>
            </div> */}
          {/* <div>
              <LinkContainer
                to="/tsla-expense-charts-2017"
                onClick={() => handleClick(TSLA)}
              >
                <Button type="button" variant="warning">
                  Tesla, Inc. - Expenses - 2017
                </Button>
              </LinkContainer>
            </div> */}
          {/* <div>
              <LinkContainer
                to="/tsla-revenue-charts-2017"
                onClick={() => handleClick(TSLA)}
              >
                <Button type="button" variant="danger">
                  Tesla, Inc. - Revenue - 2017
                </Button>
              </LinkContainer>
            </div> */}
        </div>
      </div>
    </>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buttonChoice: (event) =>
//       dispatch({ type: "BUTTON_CHOSEN", payload: event }),
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonChoice: (chosenOrganization) =>
      dispatch(actionCreators.buttonChosen(chosenOrganization)),
  };
};

export default connect(null, mapDispatchToProps)(CubePage);

// export default connect(null, mapDispatchToProps)(withRouter(CubePage));

// .wrapper
//   .carousel
//     - emojis = [ ["🐳", "spouting whale", "U+1F433	"],
//                  ["🐋", "whale", "U+1F40B	"],
//                  ["🐬", "dolphin", "U+1F42C	"],
//                  ["🐟", "fish", "U+1F41F	"],
//                  ["🐠", "tropical fish", "U+1F420	"],
//                  ["🐡", "blowfish", "U+1F421	"],
//                  ["🦈", "shark", "U+1F988	"],
//                  ["🐙", "octopus", "U+1F419	"],
//                  ["🐚", "spiral shell", "U+1F41A	"] ]

//     - emojis.each do |i|
//       .carousel__item
//         .carousel__item-head
//           #{i[0]}
//         .carousel__item-body
//           %p.title #{i[1]}
//           %p Unicode: #{i[2]}
/* <div>
            <LinkContainer to="/charts">
              <Button onClick={() => handleClick(AAPL)}>Apple Inc.</Button>
            </LinkContainer>
          </div>
          <div>
            <LinkContainer to="/charts">
              <Button onClick={() => handleClick(AAL)}>
                American Airlines Group Inc.
              </Button>
            </LinkContainer>
          </div> 
          <div>
            <LinkContainer to="/charts">
              <Button onClick={() => handleClick(TSLA)}>Tesla, Inc.</Button>
            </LinkContainer>
          </div>
          <div>
            <LinkContainer to="/charts">
              <Button onClick={() => handleClick(AMZN)}>
                Amazon.com, Inc.
              </Button>
            </LinkContainer>
          </div>
          <div>
            <LinkContainer to="/charts">
              <Button onClick={() => handleClick(COST)}>
                Costco Wholesale Corporation
              </Button>
            </LinkContainer>
          </div>
          <div>
            <LinkContainer to="/charts">
              <Button onClick={() => handleClick(MNST)}>
                Monster Beverage Corporation
              </Button>
            </LinkContainer>
          </div>
          <div>
            <LinkContainer to="/charts">
              <Button onClick={() => handleClick(ZN)}>
                Zion Oil & Gas, Inc.
              </Button>
            </LinkContainer>
          </div>
          <div>
            <LinkContainer to="/charts">
              <Button onClick={() => handleClick(MSFT)}>
                Microsoft Corporation
              </Button>
            </LinkContainer>
          </div> */
