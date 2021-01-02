import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import axios from 'axios';


describe('App tests', () => {

  const testJoke = {
    data: {
      "error": false,
      "category": 'dark',
      "type": 'single',
      "joke": 'test joke',
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 13,
      "safe": true,
      "lang": 'en',
      'setup': 'test setup',
      'delivery': 'test delivery'
    }
  };

  // Spy on axios.get and mock it's implementation
  const spy = jest.spyOn(axios, 'get');
  spy.mockResolvedValue(testJoke);

  it('renders without breaking and matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('GETs a joke with axios on mount', () => {
    render(<App />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
})


