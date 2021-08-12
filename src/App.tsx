import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div style={{ textAlign: 'center' }}>
        <h1>Hello world!</h1>
        <a className='link' href=''>
          VRST Boilerplate
        </a>
        <p>(Vite.js, React.js, Styled-Components, and Typescript)</p>
      </div>
    </React.Fragment>
  );
};

export default App;
