import * as React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { spy } from './setupTests';

describe('App tests', () => {
  it('renders without breaking and matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('GETs a joke with axios on mount', async () => {
    render(<App />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
})


