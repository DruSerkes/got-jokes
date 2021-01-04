import * as React from 'react';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { RemoveFavorites } from './RemoveFavorites';

describe('RemoveFavorites tests', () => {
    const clearFavorites = jest.fn().mockImplementation(() => console.log('calling clearFavorites'));

    it('should render without breaking and match snapshot', () => {
        const { asFragment } = render(<RemoveFavorites viewingFavorites haveFavorites clearFavorites={clearFavorites} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render a "Clear Favorites" button', () => {
        render(<RemoveFavorites viewingFavorites haveFavorites clearFavorites={clearFavorites} />);
        const removeBtn = screen.getByText('Clear Favorites');
        expect(removeBtn).toBeInTheDocument();
    });

    it('should render a modal when you click the button', () => {
        render(<RemoveFavorites viewingFavorites haveFavorites clearFavorites={clearFavorites} />);
        const removeBtn = screen.getByText('Clear Favorites');
        fireEvent.click(removeBtn);
        const removeModal = screen.getByText('Confirm');
        expect(removeModal).toBeInTheDocument();
    });

    it('should call clearFavorites and close the modal when you click the button', async () => {
        render(<RemoveFavorites viewingFavorites haveFavorites clearFavorites={clearFavorites} />);
        const removeBtn = screen.getByText('Clear Favorites');
        fireEvent.click(removeBtn);
        const removeAllBtn = screen.getByText('Remove All');
        expect(removeAllBtn).toBeInTheDocument();
        fireEvent.click(removeAllBtn)
        expect(clearFavorites).toHaveBeenCalledTimes(1);
        await waitForElementToBeRemoved(() => screen.queryByText('Confirm'));
        const removeModal = screen.queryByText('Confirm');
        expect(removeModal).not.toBeInTheDocument()
    });
})