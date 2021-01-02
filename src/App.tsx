import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { jokeData } from './types';
import { Joke } from './Joke/Joke'
import { SaveJoke } from './SaveJoke/SaveJoke'
import './App.css';
import Container from 'react-bootstrap/esm/Container';


const BASE_URL = 'https://v2.jokeapi.dev';

export const App = () => {
  const [joke, setJoke] = useState<jokeData | undefined>(undefined);
  const [favorites, setFavorites] = useState<jokeData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewingFavorites, setViewingFavorites] = useState(false);
  const handleShowFavorites = () => setViewingFavorites(true);
  const handleGetJoke = () => {
    setJoke(undefined);
    setViewingFavorites(false);
  };

  // On mount, sync localStorage and state favorites
  useEffect(() => {
    const favsFromLocalStorage = localStorage.getItem('favorites');
    if (!favsFromLocalStorage) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      setFavorites(JSON.parse(favsFromLocalStorage));
    }
  }, [favorites]);

  // Get a joke if you don't have one
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
        onClick={handleGetJoke}
        disabled={isLoading ? true : false}
        className='m-3'>
        Make Me Laugh!
        </Button>

      <SaveJoke joke={joke} viewingFavorites={viewingFavorites} />

      <Button
        variant="secondary"
        onClick={handleShowFavorites}
        className='m-3'>
        Show my Favorites
        </Button>

      <Joke isLoading={isLoading} joke={joke} />

      {/* Add favorites component */}
    </Container>
  );
}