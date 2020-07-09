import React from "react";
import "./LoginPage.scss";
import { Login, Register } from "./login/index";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLoggedIn } = this.state;

    if (isLoggedIn) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  }

  render() {
    const { isLoggedIn } = this.state;
    const current = isLoggedIn ? "Register" : "Login";
    const currentActive = isLoggedIn ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={(ref) => (this.container = ref)}>
            {isLoggedIn && (
              <Login
                containerRef={(ref) => (this.current = ref)}
                history={this.props.history}
              />
            )}
            {!isLoggedIn && (
              <Register
                containerRef={(ref) => (this.current = ref)}
                history={this.props.history}
              />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default LoginPage;

// export default function Charts() {
//   return (
//     <div>
//       <Login />
//     </div>
//   );
// }
