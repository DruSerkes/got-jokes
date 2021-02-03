import * as React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { spy } from './setupTests';

describe('App tests', () => {
  it('renders without breaking and matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  // TODO figure out why this is failing 
  it('GETs a joke with axios on mount', () => {
    render(<App />);
    expect(spy).toHaveBeenCalledTimes(1);
    // expect(spy).toHaveReturnedWith(testResponse)
  });
})


