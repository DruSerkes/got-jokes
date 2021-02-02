import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AppButtons } from './AppButtons';
import { testJoke, setJoke, setViewingFavorites, setFavorites, clearFavorites } from '../setupTests';

describe('AppButtons tests', () => {

    it('should render and match snapshot', () => {
        const { asFragment } = render(<AppButtons viewingFavorites={false} isLoading={false} joke={testJoke} favorites={[]} setJoke={setJoke} setViewingFavorites={setViewingFavorites} setFavorites={setFavorites} clearFavorites={clearFavorites} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should call setJoke and setViewingFavorites', () => {
        const { getByText } = render(<AppButtons viewingFavorites={false} isLoading={false} joke={testJoke} favorites={[]} setJoke={setJoke} setViewingFavorites={setViewingFavorites} setFavorites={setFavorites} clearFavorites={clearFavorites} />);
        const getJokeButton = getByText('Make Me Laugh!');
        fireEvent.click(getJokeButton);
        expect(setJoke).toHaveBeenCalledTimes(1);
        expect(setViewingFavorites).toHaveBeenCalledTimes(1);
    });

    it('should call setVewingFavorites', () => {
        const { getByText } = render(<AppButtons viewingFavorites={false} isLoading={false} joke={testJoke} favorites={[]} setJoke={setJoke} setViewingFavorites={setViewingFavorites} setFavorites={setFavorites} clearFavorites={clearFavorites} />);
        const showFavoritesButton = getByText('Show my Favorites');
        fireEvent.click(showFavoritesButton);
        expect(setViewingFavorites).toHaveBeenCalledTimes(1);
    });

}); 