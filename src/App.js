import React, { useState } from 'react'
import { Route, Link } from 'wouter'
import ListOfGifs from './components/ListOfGifs';
import './App.css';

function App() {
  const [keyword, setkeyword] = useState('white')

  return (
    <div className="App">
      <section className="App-content">
        <Link to='/gif/ciencia'>Gifs de ciencia</Link>
        <Link to='/gif/tecnologia'>Gifs de tecnologia</Link>
        <Link to='/gif/anime'>Gifs de anime</Link>
        <Link to='/gif/animales'>Gifs de animales</Link>
        <Route 
          component={ListOfGifs}
          path='/gif/:keyword' 
        />
      </section>
    </div>
  );
}

export default App;
