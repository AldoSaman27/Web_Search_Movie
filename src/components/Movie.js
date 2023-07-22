import './css/Movie.css';
import { Button, Form, InputGroup, Card } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { getMovieList, searchMovie } from "../Api";
import { useEffect, useState } from "react";

const Movie = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
      getMovieList().then((result) => {
        setPopularMovies(result);
      });
    }, []);
  
    const PopularMovieList = () => {
      return popularMovies.map((movie, i) => {
        return (
            <div className="col-md-3 d-flex justify-content-center" key={i}>
                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Release: {movie.release_date}</Card.Subtitle>
                        <Card.Subtitle className="text-muted">Rating: {movie.vote_average}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        );
      });
    };
  
    const search = async (q) => {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    };

    return (
        <section id="movie">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>--- Movie</h1>
                    </div>
                    <div className="col-md-4">
                        <InputGroup>
                            <Form.Control
                            placeholder="Search Movie"
                            aria-label="Search Movie"
                            aria-describedby="basic-addon2"
                            onChange={({ target }) => search(target.value)}
                            />
                            <Button variant="secondary" id="button-addon2">
                            <Search className="mb-1" />
                            </Button>
                        </InputGroup>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <PopularMovieList />
                </div>
            </div>
        </section>
    )
}

export default Movie;