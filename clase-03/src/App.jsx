import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components'
import Nav from './components/Nav'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Header/> 
      <Main/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
