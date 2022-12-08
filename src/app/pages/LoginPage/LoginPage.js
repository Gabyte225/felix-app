import React from "react";
import "../../App.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";
import "./LoginPage.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      username: e.target.value,
      password: e.target.value,
    });
  }
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      await fetch(
        "https://dummy-video-api.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: this.username, password: this.password }),
        }
      );
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }
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
                    type="text"
                    id="username"
                  />
                  <label for="password">Password</label>
                  <input
                    onChange={this.handleChange}
                    type="password"
                    id="password"
                  />
                </div>
                <div className="button-container">
                  <Button type="submit">Sign in</Button>
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
