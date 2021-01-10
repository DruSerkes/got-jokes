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
import { AppButtons } from './AppButtons/AppButtons';
import './App.css';
import Container from 'react-bootstrap/esm/Container';


const BASE_URL = 'https://v2.jokeapi.dev';



// TODO clean up main App component:
/* 
    1. convert viewingFavorites, isLoading ... to context with use reducer 
    2. create a component "App-Buttons" for the 4 buttons below 
*/
export const App = () => {
  const [joke, setJoke] = useState<jokeData | undefined>(undefined);
  const [favorites, setFavorites] = useLocalStorage('favorites');
  const [isLoading, setIsLoading] = useState(true);
  const [viewingFavorites, setViewingFavorites] = useState(false);
  const handleShowFavorites = () => setViewingFavorites(!viewingFavorites);
  const clearFavorites = (id?: Number) => {
    if (!id) {
      setFavorites([])
      setViewingFavorites(false);
    } else {
      const newfavorites = favorites.filter(fav => fav.id !== id);
      setFavorites(newfavorites);
    }
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

      <AppButtons
        viewingFavorites={viewingFavorites}
        isLoading={isLoading}
        joke={joke}
        favorites={favorites}
        handleGetJoke={handleGetJoke}
        handleShowFavorites={handleShowFavorites}
        saveFavoriteJoke={saveFavoriteJoke}
        clearFavorites={clearFavorites}
      />

      {!viewingFavorites && (<Joke isLoading={isLoading} joke={joke} />)}

      <Favorites favorites={favorites} viewingFavorites={viewingFavorites} clearFavorites={clearFavorites} />

    </Container>
  );
}