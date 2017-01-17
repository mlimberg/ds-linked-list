import React from 'react'
import { render } from 'react-dom'
import './styles';

import Header from './components/Header/Header'

const App = () => {
  return (
    <div>
      <Header />
      <p>Hello World</p>
      <p>Stuff Changed</p>
    </div>
  );
}

render(<App />, document.querySelector('.application'));
