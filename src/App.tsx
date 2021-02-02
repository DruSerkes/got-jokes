import React from 'react';
import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import axios from 'axios';
import { jokeData } from './types';
import { Joke } from './Joke/Joke'
import { Favorites } from './Favorites/Favorites';
import { AppButtons } from './AppButtons/AppButtons';
import './App.css';
import Container from 'react-bootstrap/esm/Container';


const BASE_URL = 'https://v2.jokeapi.dev';

// TODO 
// 1. Implement exponential backoff in getJoke
export const App = () => {
  const [joke, setJoke] = useState<jokeData | undefined>(undefined);
  const [favorites, setFavorites] = useLocalStorage('favorites');
  const [isLoading, setIsLoading] = useState(true);
  const [viewingFavorites, setViewingFavorites] = useState(false);
  const clearFavorites = (id?: Number) => {
    if (!id) {
      setFavorites([])
      setViewingFavorites(false);
    } else {
      const newfavorites = favorites.filter(fav => fav.id !== id);
      setFavorites(newfavorites);
    }
  };

  // Get a joke if you don't have one
  useEffect(() => {
    const getJoke = async () => {
      if (!joke) {
        setIsLoading(() => true);
        try {
          const response = await axios.get(`${BASE_URL}/joke/any`);
          const newJoke: jokeData = response.data;
          setJoke(newJoke);
          setIsLoading(() => false);
        } catch (e) {
          console.log(e);
        }
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
        setJoke={setJoke}
        setViewingFavorites={setViewingFavorites}
        setFavorites={setFavorites}
        clearFavorites={clearFavorites}
      />

      {!viewingFavorites && (<Joke isLoading={isLoading} joke={joke} />)}

      {viewingFavorites && <Favorites favorites={favorites} clearFavorites={clearFavorites} />}

    </Container>
  );
}