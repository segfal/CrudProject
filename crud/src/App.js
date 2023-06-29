import './App.css';
import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Campuses from './components/Campuses'
import Students from './components/Students'

function App() {
  return (
    <Router>
      <div className="App">
          <nav>
              <ul>
                <li>
                  <Link to = "/"> Home </Link>
                </li>
                  <li>
                    <Link to = "/campus/*"> Campuses </Link>
                  </li>
                    <li>
                      <Link to = "/students/*"> Students </Link>
                    </li>
              </ul>
          </nav>

          {/* Routes*/}
          <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "campus/*" element= {<Campuses/>} />
            <Route path = "/students/*" element = {<Students/>} />
           </Routes>
      </div>
    </Router>
  );
}

export default App;
