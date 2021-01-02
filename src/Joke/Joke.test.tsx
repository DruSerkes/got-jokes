import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Joke } from './Joke';


describe('Joke tests', () => {

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

    it('renders without breaking and matches snapshot', () => {
        const { asFragment } = render(<Joke isLoading={false} joke={testJoke} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders nothing if isLoading is true', () => {
        render(<Joke isLoading={true} joke={testJoke} />);
        const theJoke = screen.queryByText(testJoke.joke);
        expect(theJoke).not.toBeInTheDocument();
    });

    it('displays the joke on the screen', () => {
        render(<Joke isLoading={false} joke={testJoke} />);
        const theJoke = screen.getByText(testJoke.joke);
        expect(theJoke).toBeInTheDocument();
    });

    it('displays the setup and the delivery for joke with type of twopart', () => {
        testJoke.type = 'twopart';
        render(<Joke isLoading={false} joke={testJoke} />);
        const theSetup = screen.getByText(testJoke.setup);
        const theDelivery = screen.getByText(testJoke.delivery);
        expect(theSetup).toBeInTheDocument();
        expect(theDelivery).toBeInTheDocument();
    });
})