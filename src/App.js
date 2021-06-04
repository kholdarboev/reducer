import React from 'react';
import './App.css'
import { Container} from './AppStyle';
import AddMovie from './AddMovie';
import Navbar from './Navbar';

export default function App (){
  return (
    <Container>
        <Navbar/>
        <AddMovie/>
    </Container>
    )
}