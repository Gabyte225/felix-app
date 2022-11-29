import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button/Button";
import Header from "./Components/Header/Header";
import Flogo from "./images/F.png";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Footer from "./Components/Footer/Footer";
import Card from "./Components/Card/Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favorites: [],
      loading: false,
      error: false,
    };
  }

  handleClick = (id) => {
    let index = this.state.favorites.indexOf(id);
    console.log(index);
    if (index === -1) {
      this.setState((state) => ({
        favorites: [...state.favorites, id],
      }));
    } else {
      this.setState({
        favorites: this.state.favorites.filter((_, i) => i !== index),
      });
    }
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const result = await fetch(
        "https://academy-video-api.herokuapp.com/content/free-items"
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
        <Header className="header">
          <img src={Flogo} className="logo" alt="logo" />
          <Button className="custom-button">Sign in</Button>
        </Header>
        <HeroBanner className="hero-banner">
          <p className="content-text">Wanna more Content?</p>
          <Button className="custom-button">Get Access</Button>
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
                  <p className="movie-about">
                    {description.substring(0, 55)}...
                  </p>
                </div>
                <Button
                  id={id}
                  type="button"
                  className={
                    this.state.favorites.includes(id)
                      ? "favorite-button"
                      : "custom-button"
                  }
                  onClick={() => this.handleClick(id)}
                >
                  {this.state.favorites.includes(id) ? "Remove 💔" : "Favorite"}
                </Button>
                ,
              </div>
            </Card>
          ))}
        </div>
        <Button className="custom-button">Get More Content</Button>
        <Footer className="footer"></Footer>
      </div>
    );
  }
}

export default App;
