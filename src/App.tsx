import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { jokeData } from './types';
import './App.css';


const BASE_URL = 'https://v2.jokeapi.dev';

export const App = () => {
  const [joke, setJoke] = useState<jokeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const handleClick = () => setJoke(null);

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
    <div className="App">
      <h1>Got Jokes</h1>
      <Button
        variant="primary"
        onClick={handleClick}
        disabled={isLoading ? true : false}>
        Make Me Laugh!
        </Button>
      {!isLoading && joke?.type === 'twopart' &&
        <p>
          {joke?.setup}
          <br />
          {joke?.delivery}
        </p>
      }
      {!isLoading && joke?.type === 'single' &&
        <p>
          {joke?.joke}
        </p>
      }
    </div>
  );
}