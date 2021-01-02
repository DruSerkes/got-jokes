import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { jokeData } from './types';
import { Joke } from './Joke/Joke'
import './App.css';
import Container from 'react-bootstrap/esm/Container';


const BASE_URL = 'https://v2.jokeapi.dev';

export const App = () => {
  const [joke, setJoke] = useState<jokeData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const handleClick = () => setJoke(undefined);

  useEffect(() => {
    const getJoke = async () => {
      if (!joke) {
        setIsLoading(() => true);
        const response = await axios.get(`${BASE_URL}/joke/any`);
        const newJoke: jokeData = response.data;
        console.log(newJoke);
        setJoke(newJoke);
        setIsLoading(() => false);
      }
    }
    getJoke();
  }, [joke]);

  return (
    <Container className="App">
      <h1 className='h1 my-3'>Got Jokes</h1>

      <Button
        variant="primary"
        onClick={handleClick}
        disabled={isLoading ? true : false}
        className='my-3'>
        Make Me Laugh!
        </Button>

      <Joke isLoading={isLoading} joke={joke} />
    </Container>
  );
}