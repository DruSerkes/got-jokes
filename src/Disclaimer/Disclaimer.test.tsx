import * as React from 'react';
import { render } from '@testing-library/react';
import { Disclaimer } from './Disclaimer';

describe('Disclaimer tests', () => {

    it('should render and match snapshot', () => {
        const { asFragment } = render(<Disclaimer />);
        expect(asFragment()).toMatchSnapshot();
    });

}); 