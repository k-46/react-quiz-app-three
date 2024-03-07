import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HomeComponent = () => {
  
  return (
    <div className="home">
      <h1>Quiz App</h1>
      <Link to='/quiz' className="playButton">Play</Link>
    </div>
  );
}

export default HomeComponent
