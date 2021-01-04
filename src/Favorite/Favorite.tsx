import * as React from 'react';
import { jokeData } from '../types';
import './Favorite.css';

interface FavoritesProps {
    fav: jokeData;
}

export const Favorite = ({ fav }: FavoritesProps) => {
    const generateFav = (joke: jokeData) => {
        if (joke.type === 'twopart') {
            return (
                <li className='py-3 list-group-item-dark border-bottom rounded border-dark'>
                    {joke?.setup}
                    <br />
                    {joke?.delivery}
                </li>
            );
        } else {
            return (
                <li className='py-3 list-group-item-dark border-bottom rounded border-dark'>
                    {joke?.joke}
                </li>
            );
        };
    };

    return generateFav(fav);
}