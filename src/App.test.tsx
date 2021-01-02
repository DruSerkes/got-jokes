import * as React from 'react';
import { fireEvent, render, screen, waitFor, waitForDomChange } from '@testing-library/react';
import { App } from './App';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

describe('App tests', () => {

  const testJoke = {
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
  };
  const testResp = { data: testJoke }

  // Mock axios
  const spy = jest.spyOn(axios, "get");
  // jest.mock('axios');
  spy.mockResolvedValue(testResp)


  it('renders without breaking and matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('GETs a joke with axios on mount', async () => {
    // spy.mockResolvedValue(testResp)
    // act(() => {
    render(<App />);
    // })
    expect(spy).toHaveBeenCalledTimes(1);
  });

  // it('should call axios.get again when you click the button', async () => {
  //   // act(() => { render(<App />) });
  //   render(<App />);
  //   const btn = screen.getByText('Make Me Laugh!');
  //   expect(btn).toBeInTheDocument();
  //   expect(spy).toHaveBeenCalledTimes(1);
  //   act(() => {
  //     fireEvent.click(btn);
  //     fireEvent.click(btn);
  //   });
  //   await waitFor(() => {
  //     fireEvent.click(btn);
  //   })
  //   expect(spy).toHaveBeenCalledTimes(2);
  // })
})


