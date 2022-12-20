import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SingleCard from "../../Components/Card/Card";
import { Link } from "react-router-dom";

class SingleMovie extends React.Component {
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
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const token = localStorage.getItem("token");
      const { id } = this.props.match.params;
      const result = await fetch(
        `https://dummy-video-api.onrender.com/content/items/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
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
            <Link className="button-login-link" to="/">
              Logout
            </Link>
          </Button>
        </Header>
        {loading && <img src={logo} className="App-logo" alt="logo" />}
        {error && <p>Whoops! Failed to Laod!</p>}\
        <SingleCard className="single-movie-card" key={movies.id}>
          <img
            src={movies.image}
            alt="movie"
            className="single-movie-image"
          ></img>
          ,
          <div className="single-movie-card-about">
            <div className="single-movie-title-about">
              <h3 className="single-movie-title">{movies.title}</h3>,
              <p className="single-movie-about">{movies.description}</p>
            </div>
            <div className="movie-buttons">
              <Button>Watch▶️</Button>
              <Button>Favorite</Button>
            </div>
          </div>
        </SingleCard>
        <Footer />
      </div>
    );
  }
}

export default SingleMovie;
