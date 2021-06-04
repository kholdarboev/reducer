import React, { useContext, useReducer } from 'react';

import { MovieContext } from '../context';
import { Button, Container, Detail, Title } from './style';


const Movie = () => {
    const [movie, setMovie] = useContext(MovieContext);

    const onDelete = (e) => {
        var newMovie = movie.filter(data => data.id !== e);
        setMovie(newMovie)
    }

    return (
        <Container main>
            {movie.map((value) => {
                return (
                    <Container key={value.id}>
                        <Title>  {value.name}</Title>
                        <Detail>  {value.year}</Detail>
                        <Button onClick={() => onDelete(value.id)}>Delete</Button>
                    </Container>
                )
            })}
        </Container>
    )
}
export default Movie;