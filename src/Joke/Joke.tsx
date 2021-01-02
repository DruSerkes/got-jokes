import * as React from 'react';
import { jokeData } from '../types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                    <Row className='Joke-Setup my-3'>
                        <Col>
                            {joke?.setup}
                        </Col>
                    </Row>
                    <Row className='Joke-Delivery my-3'>
                        <Col>
                            {joke?.delivery}
                        </Col>
                    </Row>
                </Container>
            }
            {
                !isLoading && joke?.type === 'single' &&
                <Container className='Joke'>
                    <Row className='my-3'>
                        <Col>
                            {joke?.joke}
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}