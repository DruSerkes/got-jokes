import * as React from 'react';
import { render } from '@testing-library/react';
import { Favorite } from './Favorite';



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
        const { asFragment } = render(<Favorite fav={testJoke} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should show a joke', () => {
        const { getByText } = render(<Favorite fav={testJoke} />);
        expect(getByText(testJoke.joke)).toBeInTheDocument();
    });
})