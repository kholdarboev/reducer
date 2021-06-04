import React, { useContext, useState, useReducer } from 'react';
import { MovieContext } from '../context'
import { Button, Container, Input, Title } from './style';
import Movie from '../Movie'

const AddMovie = () => {
  const [movie, setMovie] = useContext(MovieContext);
  const [name, setName] = useState('');
  const [year, setYear] = useState('');



  const addMovie = () => {
    setTimeout(() => {

      if (name.length > 0 && year.length > 0) {
        setMovie([...movie, { id: Date.now(), name: name, year: year }])
      }
    }, 1000);
    setName('');
    setYear('');
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        console.log(movie);
        setTimeout(() => {
          if (name.length > 0 && year.length > 0) {
            setMovie([...movie, { id: Date.now(), name: name, year: year }])
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

  const [data, dispatch] = useReducer(reducer, [])




  return (
    <Container>
      <Title>Enter Your favorite Movie</Title>
      <Container content>
        <Input onChange={(e) => setName(e.target.value)} type="text" value={name} placeholder="Add Movie" />
        <Input onChange={(e) => setYear(e.target.value)} type="number" value={year} placeholder="year" />
        <Button disabled={!name.length || !year.length} onClick={addMovie} >Add movie</Button>
      </Container>
      <Movie dispatch={dispatch} />
    </Container>
  )
}

export default AddMovie;