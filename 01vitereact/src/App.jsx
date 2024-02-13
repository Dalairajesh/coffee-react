import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const username = "chai aur code"
  const [count, setCount] = useState(0)

  return (
    <h1>Hello world {username}</h1>
  )
}

export default App
