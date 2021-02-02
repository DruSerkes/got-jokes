import * as React from 'react';
import { render } from '@testing-library/react';
import { AppButtons } from './AppButtons';
import { testJoke, setJoke, setViewingFavorites, setFavorites, clearFavorites } from '../setupTests';

describe('AppButtons tests', () => {

    it('should render and match snapshot', () => {
        const { asFragment } = render(<AppButtons viewingFavorites={false} isLoading={false} joke={testJoke} favorites={[]} setJoke={setJoke} setViewingFavorites={setViewingFavorites} setFavorites={setFavorites} clearFavorites={clearFavorites} />);
        expect(asFragment()).toMatchSnapshot();
    });

}); 