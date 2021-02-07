import * as React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer tests', () => {

    it('should render and match snapshot', () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render my name &copy2021', () => {
        const { getByText } = render(<Footer />);
        const myName = getByText(`Dru Serkes ©2021`);
        expect(myName).toBeInTheDocument();
    });

}); 