import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { jokeData } from '../types';
import './TweetButton.css';

interface TweetButtonProps {
    joke: jokeData
}


export const TweetButton = ({ joke }: TweetButtonProps) => {
    const tweetText = joke.joke ? joke.joke : `${joke.setup} ${joke.delivery}`;

    return (
        <Button
            as="a"
            variant="outline-dark"
            title="tweet this joke"
            href={`https://twitter.com/intent/tweet?text=${tweetText}`}
            target="_blank"
            rel="noopener noreferrer"
            className='my-4 TweetButton'
        />
    );
};