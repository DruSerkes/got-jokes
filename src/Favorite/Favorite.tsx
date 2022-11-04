import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { jokeData } from '../types';
import './Favorite.css';

interface FavoritesProps {
  joke: jokeData;
  clearFavorites: (id: Number) => void;
}

export const Favorite = ({ joke, clearFavorites }: FavoritesProps) => {
  const handleRemove = () => clearFavorites(joke.id);
  return (
    <>
      {joke.type === 'twopart'
        ? (
          <li className='py-3 list-group-item-dark border-bottom rounded border-dark'>
            {joke?.setup}
            <br />
            {joke?.delivery}
            <Button onClick={handleRemove} className="Favorite-removeButton">X</Button>
          </li>
        )
        : (
          <li className='py-3 list-group-item-dark border-bottom rounded border-dark'>
            {joke?.joke}
            <Button onClick={handleRemove} className="Favorite-removeButton">X</Button>
          </li>
        )
      }
    </>
  )
}