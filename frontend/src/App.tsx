import React from 'react';
import './App.css';
import TopBanner from './Header';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Podcasts from './Podcasts';
import Movies from './Movies';

function App() {
  return (
    <>
      <TopBanner />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Podcasts" className="nav-link">
              Podcasts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Movies" className="nav-link">
              Movie Collection
            </Link>
          </li>
        </ul>
      </nav>
      <br></br>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Podcasts" element={<Podcasts />} />
        <Route path="/Movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
