import * as React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="Footer">
      <p>
        <a data-testid="footer" href="https://github.com/druserkes" target="_blank" rel="noopener noreferrer">
          Dru Serkes &copy;2021
        </a>
      </p>
    </footer>
  );
};