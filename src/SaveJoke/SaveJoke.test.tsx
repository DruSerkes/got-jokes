import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SaveJoke } from './SaveJoke';
import { testJoke, saveFavoriteJoke } from '../setupTests';

describe('SaveJoke tests', () => {
    it('should render without breaking and match snapshot', () => {
        const { asFragment } = render(<SaveJoke joke={testJoke} viewingFavorites={false} saveFavoriteJoke={saveFavoriteJoke} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should bring up a modal when you click the button', () => {
        render(<SaveJoke joke={testJoke} viewingFavorites={false} saveFavoriteJoke={saveFavoriteJoke} />);
        const saveBtn = screen.getByText('Save to Favorites');
        fireEvent.click(saveBtn);
        const modal = screen.getByText('Are you sure you want to save this joke to your favorites?');
        expect(modal).toBeInTheDocument();
    });

    it('should call saveFavoriteJoke', () => {
        render(<SaveJoke joke={testJoke} viewingFavorites={false} saveFavoriteJoke={saveFavoriteJoke} />);
        const saveBtn = screen.getByText('Save to Favorites');
        fireEvent.click(saveBtn);
        const modalSaveBtn = screen.getByText('Save');
        fireEvent.click(modalSaveBtn);
        expect(saveFavoriteJoke).toHaveBeenCalledTimes(1);
    });
});