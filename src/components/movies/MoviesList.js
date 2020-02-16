import React, { Component } from 'react';
import axios from "axios";
import { Row, Card, Container, Button } from "reactstrap";
import Movie2Icon from "../../assets/images/moviesIcon/Movie2Icon.webp";

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: [],
      isError: false,
    };
  }
  
  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:3001/api/v1/movies",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      this.setState({ movies: res.data });
    })
    .catch(res => {
      this.setState({ isError: true })
    })
  }

  renderShowsList = movieId => {
  	const { history } = this.props;
  	history.push(`/${movieId}/list_shows`);
  }

  renderMoviesList = () => {
    const { movies } = this.state;
    return (
      <div className="row">
        { movies.map( movie => {
            return (
              <div className='col-md-6' key={movie.id}>
                <Card className="movie-card">
                  <Button type="button" onClick= {() => {this.renderShowsList(movie.id)}}>
                    Book Tickets
                  </Button>
                  <img src={Movie2Icon} className="movie-poster" />
                </Card>
                <Row>
                  <h6 className="movie-name">{ movie.name }&nbsp;&nbsp;&nbsp; Rating: { movie.rating }</h6> 
                </Row>
              </div>
            )
          })}
      </div>
    )
  }

  render() {
    const { movies } = this.state;
    return (
      <React.Fragment>
        <Container className="page-container">
          { movies.length !== 0 && this.renderMoviesList()}
        </Container>
      </React.Fragment>
    )
  }
}

export default MoviesList;