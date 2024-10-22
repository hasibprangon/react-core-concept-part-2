import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';

function App() {

  const handleClick = () => {
    alert('Button Clicked');
  };

  const addToFive = (num) =>{
    alert(num + 5)
  }

  return (
    <>
      <h3>React core concept part 2</h3>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => addToFive(3)}>Click 2</button>
    </>
  )
}

export default App
