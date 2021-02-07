import axios from 'axios';
import { jokeData } from '../types';

const BASE_URL = 'https://v2.jokeapi.dev';

export const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

export const getJokeWithRetry = async (depth = 0): Promise<jokeData> => {
    try {
        const response = await axios.get(`${BASE_URL}/joke/any`);
        const newJoke: jokeData = response.data;
        return newJoke
    } catch (error) {
        if (depth > 7) throw error;
        
        console.log({ error })
        await wait(2 ** depth * 10);
        depth++;
        return getJokeWithRetry(depth);
    }
};


