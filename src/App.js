import React, {useState} from 'react';
import './App.css'
import { Container} from './AppStyle';
import AddMovie from './AddMovie';
import Navbar from './Navbar';
import Movie from './Movie';

export default function App (){
  return (
    <Container>
        <Navbar/>
        <AddMovie/>
        <Movie/>
    </Container>
    )
}