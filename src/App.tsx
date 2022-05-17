/* section for utility imports */
import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'

/* section for component imports */
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
import Work from './components/Work/Work'
import Contact from './components/contact/Contact'

/* section for reactFC */
const App: React.FC = () => {


  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App
