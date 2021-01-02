import * as React from 'react';
import { jokeData } from '../types';
import Col from 'react-bootstrap/Col';

interface FavoritesProps {
    favorites?: jokeData[];
    viewingFavorites: boolean;
}

export const Favorites = ({ favorites, viewingFavorites }: FavoritesProps) => {
    const generateFav = (joke: jokeData) => {
        if (joke.type === 'twopart') {
            return (
                <Col className='my-3'>
                    {joke?.setup}
                    <br />
                    {joke?.delivery}
                </Col>
            );
        } else {
            return (
                <Col className='my-3'>
                    {joke?.joke}
                </Col>
            );
        };
    };

    return (
        <>
            { viewingFavorites &&
                (<ul className='Favorites'>
                    {favorites?.map(fav => generateFav(fav))}
                </ul>)
            }
        </>
    )
}