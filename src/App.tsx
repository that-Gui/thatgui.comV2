/* section for utility imports */
import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'

/* section for component imports */
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'

/* section for reactFC */
const App: React.FC = () => {


  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="work" /* element={} */ />
        <Route path="contact" /* element={} */ />
      </Routes>

    </div>
  )
}

export default App
