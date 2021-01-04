import * as React from 'react';
import { jokeData } from '../types';
import { Favorite } from '../Favorite/Favorite';

interface FavoritesProps {
    favorites?: jokeData[];
    viewingFavorites: boolean;
}

export const Favorites = ({ favorites, viewingFavorites }: FavoritesProps) => {
    return (
        <>
            { viewingFavorites &&
                (<>
                    <h3>Favorites</h3>
                    <ul className='Favorites rounded list-group my-3'>
                        {favorites?.map(fav => <Favorite key={fav.id} fav={fav} />)}
                    </ul>
                </>
                )
            }
        </>
    )
}