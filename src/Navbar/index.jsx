import React, { useContext } from 'react'
import { Container, NavItems } from './style';
import { MovieContext } from '../context';

const Navbar = () => {
    const [movies, setMovie] = useContext(MovieContext);
    return (

        <Container>
            <NavItems>Home</NavItems>
            <NavItems>Blog</NavItems>
            <NavItems>Contact</NavItems>
            <NavItems>About</NavItems>
            <NavItems >
                Movies
                <NavItems list>{movies.length}</NavItems>
            </NavItems>
        </Container>
    )
}
export default Navbar;