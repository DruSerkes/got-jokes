import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { jokeData } from '../types';
import './Favorite.css';

interface FavoritesProps {
    fav: jokeData;
    clearFavorites: React.Dispatch<React.SetStateAction<jokeData[] | undefined>>;
}

export const Favorite = ({ fav, clearFavorites }: FavoritesProps) => {
    const handleRemove = id => clearFavorites(id);
    const generateFav = (joke: jokeData) => {
        if (joke.type === 'twopart') {
            return (
                <li className='py-3 list-group-item-dark border-bottom rounded border-dark'>
                    {joke?.setup}
                    <br />
                    {joke?.delivery}
                    <Button
                        variant="outline-danger"
                        id={fav.id}
                        onClick={handleRemove}
                    >
                        X
                    </Button>
                </li>
            );
        } else {
            return (
                <li className='py-3 list-group-item-dark border-bottom rounded border-dark'>
                    {joke?.joke}
                    <Button
                        variant="outline-danger"
                        id={fav.id}
                        onClick={handleRemove}
                    >
                        X
                    </Button>
                </li>
            );
        };
    };

    return generateFav(fav);
}