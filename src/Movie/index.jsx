import React, { useContext } from 'react';

import { MovieContext } from '../context';
import { Button, Container, Title } from './style';


const Movie = ({ dispatch }) => {
    const [movie] = useContext(MovieContext);

    const onDelete = (e) => {
        dispatch({ type: 'delete', payload: e })
    }

    return (
        <Container main>
            {movie.map((value) => {
                return (
                    <Container key={value.id}>
                        <Title>  {value.name}</Title>
                        <Button onClick={() => onDelete(value.id)}>Delete</Button>
                    </Container>
                )
            })}
        </Container>
    )
}
export default Movie;