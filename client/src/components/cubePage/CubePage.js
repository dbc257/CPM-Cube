import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./CubePage.css";

function CubePage(props) {
  // {pass in props onclick}

  const emojis = [
    ["🐳", "spouting whale", "U+1F433	"],
    ["🐋", "whale", "U+1F40B	"],
    ["🐬", "dolphin", "U+1F42C	"],
    ["🐟", "fish", "U+1F41F	"],
    ["🐠", "tropical fish", "U+1F420	"],
    ["🐡", "blowfish", "U+1F421	"],
    ["🦈", "shark", "U+1F988	"],
    ["🐙", "octopus", "U+1F419	"],
    ["🐚", "spiral shell", "U+1F41A	"],
  ];

  const handleClick = (emoji) => {
    props.buttonChoice(emoji);
    props.history.push("/charts");
  };

  emojis.map((e) => e[0]);
  return (
    <div className="wrapper">
      <div className="carousel">
        <li>
          <ul>
            {emojis.map((e) => {
              return (
                <div className="carousel__item">
                  <div className="carousel__item-head">
                    <button onClick={() => handleClick(e)}>{e[0]}</button>
                  </div>
                  <div className="carousel__item-body">
                    <button onClick={() => handleClick(e)}>
                      <p className="title">{e[1]}</p>
                    </button>
                    <button onClick={() => handleClick(e)}>
                      <p className="Unicode">{e[2]}</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        </li>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    buttonChoice: (event) =>
      dispatch({ type: "BUTTON_CHOSEN", payload: event }),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(CubePage));

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
