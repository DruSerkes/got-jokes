import * as React from 'react';
import { jokeData } from '../types';

interface FavoritesProps {
    favorites?: jokeData[];
    viewingFavorites: boolean;
}

export const Favorites = ({ favorites, viewingFavorites }: FavoritesProps) => {
    const generateFav = (joke: jokeData) => {
        if (joke.type === 'twopart') {
            return (
                <li className='py-3 list-group-item-dark border-bottom border-dark'>
                    {joke?.setup}
                    <br />
                    {joke?.delivery}
                </li>
            );
        } else {
            return (
                <li className='py-3 list-group-item-dark border-bottom border-dark'>
                    {joke?.joke}
                </li>
            );
        };
    };

    return (
        <>
            { viewingFavorites &&
                (<ul className='Favorites list-group'>
                    {favorites?.map(fav => generateFav(fav))}
                </ul>)
            }
        </>
    )
}