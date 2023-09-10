import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Header from './components/Header/Header'
import Button from './ui/Button/Button'
import Categories from './components/Catagories/Categories'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-'>
      <Navbar/>
      <Header />
      <Categories />

    </div>
  )
}

export default App
