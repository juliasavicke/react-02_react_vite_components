import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App container'>
      <h1>Hello Vite React</h1>
    </div>
  );
}

export default App;
