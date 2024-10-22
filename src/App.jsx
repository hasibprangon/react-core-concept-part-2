import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

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
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => addToFive(3)}>Click 2</button>
    </>
  )
}

export default App
