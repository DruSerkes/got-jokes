import * as React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { SaveJoke } from '../SaveJoke/SaveJoke';
import { RemoveFavorites } from '../RemoveFavorites/RemoveFavorites';
import { jokeData } from '../types';

interface AppButtonsProps {
    viewingFavorites: boolean;
    isLoading: boolean;
    joke: jokeData | undefined;
    favorites: jokeData[];
    handleGetJoke: () => void;
    handleShowFavorites: () => void;
    saveFavoriteJoke: () => void;
    clearFavorites: () => void;
}

export const AppButtons = ({ viewingFavorites, isLoading, joke, favorites, handleGetJoke, handleShowFavorites, saveFavoriteJoke, clearFavorites }: AppButtonsProps) => {
    return (
        <ButtonGroup aria-label="Main App Buttons" className="Buttons">
            <Button
                variant="primary"
                onClick={handleGetJoke}
                disabled={isLoading ? true : false}
                className='my-4 mx-2'>
                Make Me Laugh!
            </Button>

            <SaveJoke joke={joke} viewingFavorites={viewingFavorites} saveFavoriteJoke={saveFavoriteJoke} />

            <Button
                variant="secondary"
                onClick={handleShowFavorites}
                className='my-4 mx-2'>
                {!viewingFavorites ? 'Show my Favorites' : 'Hide my Favorites'}
            </Button>

            <RemoveFavorites clearFavorites={clearFavorites} haveFavorites={!!favorites.length} viewingFavorites={viewingFavorites} />
        </ButtonGroup>
    );
};