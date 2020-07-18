import React from "react";
import "../pagesCss/scss/LoginPage.scss";
import { Register } from "../components/login/register";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
// import { setAuthenticationHeader } from "../../utils/Auth";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={(ref) => (this.container = ref)}>
            {!isLoggedIn && (
              <Register
                containerRef={(ref) => (this.current = ref)}
                history={this.props.history}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

// export default LoginPage;
const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: () => dispatch(actionCreators.authenticated(true)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
