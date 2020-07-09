import React from "react";
import loginImg from "../../login.svg";
import axios from "axios";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
import { setAuthenticationHeader } from "../utils/Auth";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.state = {
      user: {
        username: "David",
        password: "1234",
      },
    };
  }

  handleLogin = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleLoginPost = () => {
    axios
      .post("http://localhost:3001/api/login", {
        username: this.state.user.username,
        password: this.state.user.password,
      })
      .then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          localStorage.setItem("jsonwebtoken", token);
          setAuthenticationHeader(token);
          console.log(token);
          this.props.onAuthenticated(true);
          alert(response.data.message);
          this.props.history.push("/");
        } else {
          alert(response.data.message);
          alert("response failed");
          this.state = {
            user: {
              ...this.state.user,
              password: "",
            },
          };
          // setUser({
          //   ...user,
          //   password: "",
          // });
        }
      });
  };

  guestLoginPost = () => {
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.props.guestUser),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          this.props.onAuthenticated(true);
          alert(response.message);
          this.props.history.push("/");
        } else {
          alert(response.message);
          this.state = {
            user: {
              ...this.state.user,
              password: "",
            },
          };
          // setUser({
          //   ...user,
          //   password: "",
          // });
        }
      });
  };
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img alt="login" src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                onChange={this.handleLogin}
                type="text"
                name="username"
                placeholder="username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleLogin}
                type="password"
                name="password"
                placeholder="password"
                required
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={this.handleLoginPost} type="button" className="btn">
            Login
          </button>
        </div>
        <div className="footer">
          <button onClick={this.guestLoginPost} type="button" className="btn">
            Guest Login
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: () => dispatch(actionCreators.authenticated(true)),
  };
};
// export default Login;
export default connect(null, mapDispatchToProps)(Login);
