import React, { useContext } from 'react';

import { MovieContext } from '../context';
import { Button, Container, Detail, Title } from './style';


const Movie = ({ dispatch }) => {
    const [movie] = useContext(MovieContext);

    const onDelete = (id) => {
        dispatch({ type: 'delete', payload: id })
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