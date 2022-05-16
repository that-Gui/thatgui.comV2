//section for utility imports
import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'

//section for component imports
import logo from './logo.svg'

//section for reactFC
const App: React.FC = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div className="App">
      

      {/* <Routes>
        <Route path="/" element={} />
        <Route path="work" element={} />
        <Route path="contact" element={} />
      </Routes> */}
//bellow this is all boiler plate

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
