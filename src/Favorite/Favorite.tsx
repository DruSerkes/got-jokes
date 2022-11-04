import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { TweetButton } from '../TweetButton/TweetButton';
import { jokeData } from '../types';
import './Favorite.css';

interface FavoritesProps {
  joke: jokeData;
  clearFavorites: (id: Number) => void;
}

export const Favorite = ({ joke, clearFavorites }: FavoritesProps) => {
  const handleRemove = () => clearFavorites(joke.id);
  return (
    <li className='py-3 list-group-item-dark border-bottom rounded border-dark'>
      {joke.type === 'twopart'
        ? (<>
          {joke?.setup}
          <br />
          {joke?.delivery}
        </>)
        : joke?.joke}
      <TweetButton joke={joke} bootstrapClasses={['py-3', 'px-1']} />
      <Button onClick={handleRemove} className="Favorite-removeButton" variant='link'>X</Button>
    </li>
  )
}