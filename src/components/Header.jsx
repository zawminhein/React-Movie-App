import React, { useRef } from 'react'
import { Button, TextInput, Navbar } from "flowbite-react";
import { Link } from 'react-router';
import { api, api_key } from '../api';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/action/movies';

const Header = () => {

  const movieName = useRef('');
  const dispatch = useDispatch();

  const searchMovie =async () => {
    // console.log(movieName.current.value);
    if(movieName.current.value !== '') {
      const res = await api.get(`/search/movie?query=${movieName.current.value}&api_key=${api_key}`);
      // console.log(res.data.results);
      dispatch(fetchMovies(res.data.results));
    } else {
      const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
    }
  }
  
  return (
    <div>
      <Navbar fluid rounded>
      <Navbar.Brand as={Link} to='/'>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Movie Channel</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div>
          <TextInput id="input-info" placeholder="Search" required color="info" ref={movieName}/>
        </div>
        <div className="ms-1">
          <Button color="dark" pill onClick={() => searchMovie()}>Search</Button>
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Header