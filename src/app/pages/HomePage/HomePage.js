import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    const retrieveID = JSON.parse(localStorage.getItem("id")) || [];

    this.state = {
      movies: [],
      favorites: retrieveID,
      loading: false,
      error: false,
    };
  }

  handleClick = (id) => {
    if (!this.state.favorites.includes(id)) {
      this.setState((state) => ({
        favorites: [...state.favorites, id],
      }));
      localStorage.setItem("id", JSON.stringify([...this.state.favorites, id]));
    } else {
      const favorit = this.state.favorites.filter((movieId) => movieId !== id);
      localStorage.setItem("id", JSON.stringify(favorit));
      this.setState({
        favorites: favorit,
      });
    }
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const result = await fetch(
        "https://dummy-video-api.onrender.com/content/free-items"
      );

      if (result.status >= 400 && result.status <= 599) {
        this.setState({ error: true });
      } else {
        const json = await result.json();
        this.setState({ movies: json });
      }
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { loading, error, movies } = this.state;
    return (
      <div className="App">
        <Header>
          <Button>
            <Link className="button-login-link" to="/login">
              Sign in
            </Link>
          </Button>
        </Header>
        <HeroBanner className="hero-banner">
          <p className="content-text">Wanna more Content?</p>
          <Button>Get Access</Button>
        </HeroBanner>
        <div className="main-container">
          {loading && <img src={logo} className="App-logo" alt="logo" />}
          {error && <p>Whoops! Failed to Laod!</p>}
          {movies.map(({ title, id, image, description }) => (
            <Card className="movie-card" key={id}>
              <img src={image} alt="movie" className="movie-image"></img>,
              <div className="movie-card-about">
                <div className="movie-title-about">
                  <h3 className="movie-title">{title}</h3>,
                  <p className="movie-about">{description}</p>
                </div>
                <Button
                  id={id}
                  style={this.state.favorites.includes(id) ? "outline" : ""}
                  onClick={() => this.handleClick(id)}
                >
                  {this.state.favorites.includes(id) ? "Remove 💔" : "Favorite"}
                </Button>
                ,
              </div>
            </Card>
          ))}
        </div>
        <div className="get-more-content">
          <Button>Get More Content</Button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
