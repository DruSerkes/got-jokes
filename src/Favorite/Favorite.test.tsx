import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Favorite } from './Favorite';
import { testJoke, clearFavorites } from '../setupTests';


describe('Favorites tests', () => {

    it('should render and match snapshot', () => {
        const { asFragment } = render(<Favorite fav={testJoke} clearFavorites={clearFavorites} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should show a joke', () => {
        const { getByText } = render(<Favorite fav={testJoke} clearFavorites={clearFavorites} />);
        expect(getByText(testJoke.joke)).toBeInTheDocument();
    });

    it('should call clearFavorites', () => {
        const { getByText } = render(<Favorite fav={testJoke} clearFavorites={clearFavorites} />);
        const removeButton = getByText('X');
        fireEvent.click(removeButton);
        expect(clearFavorites).toHaveBeenCalledTimes(1);
    });
})