import * as React from 'react';
import { jokeData } from '../types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

interface JokeProps {
    isLoading: boolean;
    joke?: jokeData;
}

export const Joke = ({ joke, isLoading }: JokeProps) => {
    return (
        <>
            {
                !isLoading && joke?.type === 'twopart' &&
                <Container className='Joke'>
                    <Row className='Joke-Setup'>
                        {joke?.setup}
                    </Row>
                    <Row className='Joke-Delivery'>
                        {joke?.delivery}
                    </Row>
                </Container>
            }
            {
                !isLoading && joke?.type === 'single' &&
                <Container className='Joke'>
                    <Row>
                        {joke?.joke}
                    </Row>
                </Container>
            }
        </>
    )
}