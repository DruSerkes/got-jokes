import * as React from 'react';
import { render } from '@testing-library/react';
import { Favorites } from './Favorites';
import { testJoke, clearFavorites } from '../setupTests';



describe('Favorites tests', () => {

    it('should render and match snapshot', () => {
        const { asFragment } = render(<Favorites favorites={[testJoke]} clearFavorites={clearFavorites} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should show a list of favorites', () => {
        const { getByText } = render(<Favorites favorites={[testJoke]} clearFavorites={clearFavorites} />);
        expect(getByText('Favorites')).toBeInTheDocument();
        expect(getByText(testJoke.joke)).toBeInTheDocument();
    });

})