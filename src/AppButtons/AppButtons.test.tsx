import * as React from 'react';
import { render } from '@testing-library/react';
import { AppButtons } from './AppButtons';
import { testJoke } from '../setupTests';

describe('AppButtons tests', () => {
    const setJoke = jest.fn(() => console.log('setting joke'));
    const setViewingFavorites = jest.fn(() => console.log('viewing favorites'));
    const setFavorites = jest.fn(() => console.log('setting favorites'));
    const clearFavorites = jest.fn(() => console.log('clearing favorites'));

    it('should render and match snapshot', () => {
        const { asFragment } = render(<AppButtons viewingFavorites={false} isLoading={false} joke={testJoke} favorites={[]} setJoke={setJoke} setViewingFavorites={setViewingFavorites} setFavorites={setFavorites} clearFavorites={clearFavorites} />);
        expect(asFragment()).toMatchSnapshot();
    });

}); 