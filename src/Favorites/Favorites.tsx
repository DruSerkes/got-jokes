import * as React from 'react';
import { jokeData } from '../types';
import { Favorite } from '../Favorite/Favorite';

interface FavoritesProps {
    favorites?: jokeData[];
    clearFavorites: (id: Number) => void;
}

export const Favorites = ({ favorites, clearFavorites }: FavoritesProps) => {
    return (
        <>
            <h3>Favorites</h3>
            <ul className='Favorites rounded list-group my-3'>
                {favorites?.map(fav => <Favorite key={fav.id} joke={fav} clearFavorites={clearFavorites} />)}
            </ul>
        </>
    )
}