import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  handleRegister = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleRegisterPost = () => {
    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.user),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        alert(response.message);
        this.props.history.push("/login");
      });
  };

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img alt="register" src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                onChange={this.handleRegister}
                type="text"
                name="username"
                placeholder="username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleRegister}
                type="text"
                name="password"
                placeholder="password"
                required
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button
            onClick={this.handleRegisterPost}
            type="button"
            className="btn"
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

// function Register(props) {
// const [user, setUser] = useState({});

// function handleRegister(e) {
//   setUser({
//     ...user,
//     [e.target.name]: e.target.value,
//   });
// }

// function handleRegisterPost() {
//   fetch("http://localhost:3001/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       console.log(response);
//       alert(response.message);
//       props.history.push("/Login");
//     });
// }
