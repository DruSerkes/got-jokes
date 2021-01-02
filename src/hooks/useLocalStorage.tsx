import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialState = []) => {
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
	useEffect(
		() => {
			window.localStorage.setItem(key, JSON.stringify(items));
		},
		[key, items]
	);

	return [items, setItems];
};