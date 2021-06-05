import React, { useContext, useReducer, useState } from 'react';
import { MovieContext } from '../context'
import { Button, Container, Input, Title } from './style';
import Movie from '../Movie'
const AddMovie = () => {


  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        setTimeout(() => {
          if (name.length > 0) {
            setMovie([...movie, { id: Date.now(), name: name }])
          }
        }, 1000);
        setName('');
        return state
      case 'delete':
        console.log(movie);
        var newMovie = movie.filter(data => data.id !== action.payload);
        setMovie(newMovie)
        return state
      default: return state
    }
  }


  const [movie, setMovie] = useContext(MovieContext);
  const [name, setName] = useState('');
  const [todo, dispatch] = useReducer(reducer, [])




  return (
    <Container>
      <Title>Enter Your favorite Movie</Title>
      <Container content>
        <Input onChange={(e) => setName(e.target.value)} type="text" value={name} placeholder="Add Movie" />
        <Button disabled={!name.length} onClick={() => dispatch({ type: 'add' })} >Add movie</Button>
      </Container>
      <Movie dispatch={dispatch} />
    </Container>
  )
}

export default AddMovie;