import * as React from 'react';
import { render } from '@testing-library/react';
import { Favorite } from './Favorite';
import { testJoke } from '../setupTests';


describe('Favorites tests', () => {

    it('should render and match snapshot', () => {
        const { asFragment } = render(<Favorite fav={testJoke} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should show a joke', () => {
        const { getByText } = render(<Favorite fav={testJoke} />);
        expect(getByText(testJoke.joke)).toBeInTheDocument();
    });
})