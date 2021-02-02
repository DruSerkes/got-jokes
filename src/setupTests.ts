// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

export const testJoke = {
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

export const setJoke = jest.fn(() => console.log('setting joke'));
export const setViewingFavorites = jest.fn(() => console.log('viewing favorites'));
export const setFavorites = jest.fn(() => console.log('setting favorites'));
export const clearFavorites = jest.fn(() => console.log('clearing favorites'));
export const saveFavoriteJoke = jest.fn(() => console.log('saving favorite joke'));