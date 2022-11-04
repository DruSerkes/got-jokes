import { useState, useEffect } from 'react';
import { jokeData } from '../types';

export const useLocalStorage = (key: string, initialState: jokeData[] = []): [jokeData[], React.Dispatch<jokeData[]>] => {
  const [items, setItems] = useState(() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(initialState));
    } catch (e) {
      console.log(e);
      value = initialState;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(items));
  }, [key, items]);

  return [items, setItems];
};