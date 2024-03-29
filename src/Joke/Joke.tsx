import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner'
import { jokeData } from '../types';
import './Joke.css';

interface JokeProps {
  isLoading: boolean;
  joke?: jokeData;
}

export const Joke = ({ joke, isLoading }: JokeProps) => {
  return (
    <Container className='Joke'>
      {!joke && <Spinner animation='grow' />}
      {
        !isLoading && joke?.type === 'twopart' && (
          <>
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
          </>
        )}
      {
        !isLoading && joke?.type === 'single' && (
          <Row className='my-3'>
            <Col>
              {joke?.joke ?? "No kidding!\n Sorry, but we couldn't fetch a joke. Please try again"}
            </Col>
          </Row>
        )}
    </Container>
  )
}