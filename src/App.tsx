import React from 'react';
import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { jokeData } from './types';
import { Joke } from './Joke/Joke'
import { SaveJoke } from './SaveJoke/SaveJoke';
import { Favorites } from './Favorites/Favorites';
import { RemoveFavorites } from './RemoveFavorites/RemoveFavorites';
import './App.css';
import Container from 'react-bootstrap/esm/Container';


const BASE_URL = 'https://v2.jokeapi.dev';


// TODO add ability to remove single joke from favorites 
// TODO clean up main App component 
// TODO add tests 
export const App = () => {
  const [joke, setJoke] = useState<jokeData | undefined>(undefined);
  const [favorites, setFavorites] = useLocalStorage('favorites');
  const [isLoading, setIsLoading] = useState(true);
  const [viewingFavorites, setViewingFavorites] = useState(false);
  const handleShowFavorites = () => setViewingFavorites(!viewingFavorites);
  const clearFavorites = () => {
    setFavorites([])
    setViewingFavorites(false);
  };
  const handleGetJoke = () => {
    setJoke(undefined);
    setViewingFavorites(false);
  };
  const saveFavoriteJoke = () => {
    if (!joke) return;
    const newFavorites: jokeData[] = [joke, ...favorites];
    setFavorites(newFavorites);
    setJoke(undefined)
  };

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
      <h1 className='h1 my-4'>Got Jokes</h1>

      <Button
        variant="primary"
        onClick={handleGetJoke}
        disabled={isLoading ? true : false}
        className='my-4 mx-2'>
        Make Me Laugh!
        </Button>

      <SaveJoke joke={joke} viewingFavorites={viewingFavorites} saveFavoriteJoke={saveFavoriteJoke} />

      <Button
        variant="secondary"
        onClick={handleShowFavorites}
        className='my-4 mx-2'>
        {!viewingFavorites ? 'Show my Favorites' : 'Hide my Favorites'}
      </Button>

      <RemoveFavorites clearFavorites={clearFavorites} haveFavorites={!!favorites.length} viewingFavorites={viewingFavorites} />

      {!viewingFavorites && (<Joke isLoading={isLoading} joke={joke} />)}

      <Favorites favorites={favorites} viewingFavorites={viewingFavorites} />

    </Container>
  );
}