import { createGlobalStyle } from 'styled-components';
import Variables from './Variables';

export const GlobalStyles = createGlobalStyle`
  ${Variables};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  // Scrollbar styles 
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black);
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--black);
    border-radius: 10px;
  }

  body {
    margin: 0 auto;
    font-family: var(--font-main);
    background-color: var(--white);
    color: var(--black);
    max-width: var(--max-width);
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--black);
    transition: var(--transition);

    :hover {
      color: var(--blue)
    }
  }

  .link {
    position: relative;

    :hover::after {
      width: 100%;
    }

    ::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      height: 2px;
      border-radius: 1px;
      width: 0px;
      background-color: var(--blue);
      transition: var(--transition);
    }
  }
`;
