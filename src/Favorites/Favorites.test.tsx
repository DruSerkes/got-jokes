import * as React from 'react';
import { render } from '@testing-library/react';
import { Favorites } from './Favorites';



describe('Favorites tests', () => {
    const testJoke = {
        "error": false,
        "category": 'dark',
        "type": 'single',
        "joke": 'test joke',
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 13,
        "safe": true,
        "lang": 'en',
        'setup': 'test setup',
        'delivery': 'test delivery'
    };

    it('should render and match snapshot', () => {
        const { asFragment } = render(<Favorites favorites={[testJoke]} viewingFavorites />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should show a list of favorites', () => {
        const { getByText } = render(<Favorites favorites={[testJoke]} viewingFavorites />);
        expect(getByText('Favorites')).toBeInTheDocument();
        expect(getByText(testJoke.joke)).toBeInTheDocument();
    });
})