import React from 'react';
import { useState, useEfect } from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

interface jokeData {
  "error": boolean;
  "category": string;
  "type": string;
  "joke": string;
  "flags": {
    "nsfw": boolean,
    "religious": boolean,
    "political": boolean,
    "racist": boolean,
    "sexist": boolean,
    "explicit": boolean
  },
  "id": number;
  "safe": boolean;
  "lang": string;
}


export const App = () => {
  const [joke, setJoke] = useState(initialState)

  return (
    <div className="App">
      <h1>Got Jokes</h1>
      <Button variant="primary">Make Me Laugh!</Button>

      {/* TODO App goes here */}
    </div>
  );
}