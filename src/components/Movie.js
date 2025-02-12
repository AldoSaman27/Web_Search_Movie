// Style
import './css/Movie.css';

// React
import { useEffect, useState } from "react";

// React Bootstrap
import { Button, Form, InputGroup, Card } from 'react-bootstrap';

// React Bootstrap Icons
import { Search } from 'react-bootstrap-icons';

// Api
import { getMovieList, searchMovie } from "../Api";

const Movie = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getMovieList().then((result) => setPopularMovies(result));
    }, []);

    const PopularMovieList = () => {
        return popularMovies.map((item, index) => (
            <div className="col-md-3 d-flex justify-content-center" key={index}>
                <Card className="m-3" style={{ width: '13rem' }}>
                    <Card.Img variant="top" src={`${process.env.REACT_APP_BASEIMGURL}/${item.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Release: {item.release_date}</Card.Subtitle>
                        <Card.Subtitle className="text-muted">Rating: {item.vote_average}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        ));
    };

    const handleSearchMovie = async (q) => {
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
                            <Form.Control placeholder="Search Movie" onChange={(e) => handleSearchMovie(e.target.value)} />
                            <Button variant="secondary"><Search className="mb-1" /></Button>
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