import React from "react";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
// import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
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
  const AAL = "AAL";
  const TSLA = "TSLA";
  const AMZN = "AMZN";
  const COST = "COST";
  const MNST = "MNST";
  const ZN = "ZN";
  const MSFT = "MSFT";

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
            <LinkContainer
              type="button"
              to="/charts"
              onClick={() => handleClick(FB)}
            >
              <Button type="button" vairant="success">
                Facebook
              </Button>
            </LinkContainer>
          </div>
          <div>
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
