import * as React from 'react';
import { render } from '@testing-library/react';
import { TweetButton } from './TweetButton';
import { testJoke } from '../setupTests';

describe('TweetButton tests', () => {

    it('should render and match snapshot', () => {
        const { asFragment } = render(<TweetButton joke={testJoke} />);
        expect(asFragment()).toMatchSnapshot();
    });

}); 