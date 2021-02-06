import * as React from 'react';
import { render, screen, act } from '@testing-library/react';
import { App } from './App';
import { wait } from './helpers/helpers';
import { testJoke } from './setupTests';
import * as helpers from './helpers/helpers';

describe('App tests', () => {


  it('renders without breaking and matches snapshot', async () => {
    const spy = jest.spyOn(helpers, 'getJokeWithRetry').mockResolvedValue(testJoke);

    await act(async () => {
      const { asFragment } = render(<App />);
      await wait(800)
      expect(asFragment()).toMatchSnapshot();
    })

  });

  it('renders the test joke', async () => {
    const spy = jest.spyOn(helpers, 'getJokeWithRetry').mockResolvedValue(testJoke);

    await act(async () => {
      render(<App />);
      await wait(800);
    });

    const { getByText } = screen;
    const jokeText = getByText(testJoke.joke);
    expect(jokeText).toBeInTheDocument();
  });

});


