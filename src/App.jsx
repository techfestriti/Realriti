import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/Herosection'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import RegistrationForm from './components/RegistrationForm'
import Gallery from './components/Gallery'
import Admin from './components/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/home" element={<HeroSection />} />
        <Route path='/registration' element={ <RegistrationForm/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
    </>
  )
}

export default App
