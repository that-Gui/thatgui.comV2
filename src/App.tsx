/* section for utility imports */
import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'

/* section for component imports */

/* section for reactFC */
const App: React.FC = () => {


  return (
    <div className="App">
      
      <h1>this</h1>
      <h3>font</h3>
      <p>Hello gui, use this paragraph to see if the font is chaging</p>

      <Routes>
        <Route path="/" /* element={} */ />
        <Route path="work" /* element={} */ />
        <Route path="contact" /* element={} */ />
      </Routes>

    </div>
  )
}

export default App
