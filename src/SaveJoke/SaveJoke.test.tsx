import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SaveJoke } from './SaveJoke';


describe('SaveJoke tests', () => {
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
    afterAll(() => { localStorage.clear() });

    it('should render without breaking and match snapshot', () => {
        const { asFragment } = render(<SaveJoke joke={testJoke} isLoading={false} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should bring up a modal when you click the button', () => {
        render(<SaveJoke joke={testJoke} isLoading={false} />);
        const saveBtn = screen.getByText('Save to Favorites');
        fireEvent.click(saveBtn);
        const modal = screen.getByText('Are you sure you want to save this joke to your favorites?');
        expect(modal).toBeInTheDocument();
    });

    it('should save the joke to localStorage', () => {
        render(<SaveJoke joke={testJoke} isLoading={false} />);
        const saveBtn = screen.getByText('Save to Favorites');
        fireEvent.click(saveBtn);
        const modalSaveBtn = screen.getByText('Save');
        fireEvent.click(modalSaveBtn);
        const favsFromLocalStorage = JSON.parse(localStorage.getItem('favorites'));
        expect(favsFromLocalStorage).toBeTruthy();
        expect(favsFromLocalStorage).toEqual([testJoke]);
    })
})