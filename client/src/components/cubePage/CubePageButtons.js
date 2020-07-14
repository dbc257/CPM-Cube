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
  //   ["🐋", "Apple Inc.", "AAPL"],
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
    // console.log(e);
    // props.history.push("/charts");
  };

  // emojis.map((e) => e[0]);
  return (
    <>
      <div className="wrapper">
        <div>
          <br />
          <h4>The Business Intelligence Cube (BIC)</h4>
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
          <br />
          <div>
            <h5>Press Buttons below to see financial data from 2019-2017</h5>
            <br />
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
            <h5>Press Buttons below to add API data to the Company database</h5>
            <br />
            <ButtonGroup justified>
              <LinkContainer to="/chart-data">
                <Button
                  onClick={() => handleClick(FB)}
                  variant="success"
                  bsSize="large"
                >
                  Facebook API Upload
                </Button>
              </LinkContainer>
              <LinkContainer to="/chart-data">
                <Button
                  onClick={() => handleClick(AAPL)}
                  variant="warning"
                  bsSize="large"
                >
                  Apple, Inc. API Upload
                </Button>
              </LinkContainer>

              <LinkContainer to="/chart-data">
                <Button
                  onClick={() => handleClick(TSLA)}
                  variant="danger"
                  bsSize="large"
                >
                  Tesla, Inc. API Upload
                </Button>
              </LinkContainer>
            </ButtonGroup>
          </div>
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
              <LinkContainer to="/charts-data">
              <Button onClick={() => handleClick(FB)}>
                Facebook
              </Button>
            </LinkContainer>
            <LinkContainer to="/charts-data">
              <Button onClick={() => handleClick(AAPL)}>Apple Inc.</Button>
            </LinkContainer>
          
            <LinkContainer to="/charts-data">
              <Button onClick={() => handleClick(TSLA)}>Tesla, Inc.</Button>
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
