import * as React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { SaveJoke } from '../SaveJoke/SaveJoke';
import { RemoveFavorites } from '../RemoveFavorites/RemoveFavorites';
import { jokeData } from '../types';
import { TweetButton } from '../TweetButton/TweetButton';

interface AppButtonsProps {
  viewingFavorites: boolean;
  isLoading: boolean;
  joke: jokeData | undefined;
  favorites: jokeData[];
  setJoke: React.Dispatch<React.SetStateAction<jokeData | undefined>>;
  setViewingFavorites: React.Dispatch<React.SetStateAction<boolean>>;
  setFavorites: React.Dispatch<jokeData[]>;
  clearFavorites: () => void;
}

export const AppButtons = ({ viewingFavorites, isLoading, joke, favorites, setJoke, setViewingFavorites, setFavorites, clearFavorites }: AppButtonsProps) => {
  const handleShowFavorites = () => setViewingFavorites(!viewingFavorites);
  const handleGetJoke = () => {
    setJoke(undefined);
    setViewingFavorites(false);
  };
  const saveFavoriteJoke = () => {
    if (!joke) return;
    const newFavorites: jokeData[] = [joke, ...favorites];
    setFavorites(newFavorites);
    setJoke(undefined)
  };
  return (
    <ButtonGroup aria-label="Main App Buttons" className="Buttons">
      <Button
        variant="primary"
        onClick={handleGetJoke}
        disabled={isLoading ? true : false}
        className='my-4'>
        Make Me Laugh!
      </Button>

      <SaveJoke joke={joke} viewingFavorites={viewingFavorites} saveFavoriteJoke={saveFavoriteJoke} />

      <Button
        variant="secondary"
        onClick={handleShowFavorites}
        className='my-4'>
        {!viewingFavorites ? 'Show my Favorites' : 'Hide my Favorites'}
      </Button>

      {joke && !viewingFavorites && <TweetButton joke={joke} bootstrapClasses={['my-4']} />}

      <RemoveFavorites clearFavorites={clearFavorites} haveFavorites={!!favorites.length} viewingFavorites={viewingFavorites} />
    </ButtonGroup>
  );
};