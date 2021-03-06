import React from 'react';
import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { getJokeWithRetry } from './helpers/helpers';
import { jokeData } from './types';
import { Joke } from './Joke/Joke'
import { Favorites } from './Favorites/Favorites';
import { AppButtons } from './AppButtons/AppButtons';
import Container from 'react-bootstrap/esm/Container';
import { Footer } from './Footer/Footer';
import { Disclaimer } from './Disclaimer/Disclaimer';
import './App.css';


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
    if (!joke) {
      setIsLoading(true);
      getJokeWithRetry().then(newJoke => setJoke(newJoke));
      setIsLoading(false);
    }
  }, [joke]);

  return (
    <>
      <Container className="App">
        <h1 className='h1 my-4'>Got Jokes</h1>
        <Disclaimer />

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
      <Footer />

    </>
  );
}