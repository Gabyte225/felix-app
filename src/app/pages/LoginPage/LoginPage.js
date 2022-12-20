import React from "react";
import "../../App.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";
import "./LoginPage.css";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token") || "";

    this.state = {
      loading: false,
      error: false,
      username: "",
      password: "",
      token: token,
      errorMsg: "All inputs must be filled",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleLogin = async (username, password) => {
    return fetch("https://dummy-video-api.onrender.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    }).then(async function (response) {
      let json = await response.json();

      localStorage.setItem("token", json.token);
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
      alert(this.state.errorMsg);
    } else {
      await this.handleLogin(this.state.username, this.state.password);
    }
  };
  render() {
    return (
      <div className="App">
        <div className="login-page">
          <Header />
          <div className="login-container">
            <div className="form-container">
              <form className="form-container--items">
                <div className="items">
                  <label for="username">Username</label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.username}
                    type="text"
                    id="username"
                  />
                  <label for="password">Password</label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.password}
                    type="password"
                    id="password"
                  />
                </div>
                <div className="button-container">
                  <Button type="submit" onClick={this.handleSubmit}>
                    <Link to="/items">Sign in</Link>
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default LoginPage;
