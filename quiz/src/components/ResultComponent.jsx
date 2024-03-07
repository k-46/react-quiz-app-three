import React, { useContext } from "react";
import "../App.css";
import { Container } from "../App";
import { Link } from "react-router-dom";

const ResultComponent = () => {
  const {
    attempted,
    crctAnswer,
    setCurrentQuestion,
    setCrctAnswer,
    setAttempted,
  } = useContext(Container);

  const handleExit = () => {
    setAttempted(0);
    setCrctAnswer(0);
    setCurrentQuestion(0);
  };

  return (
    <div className="result">
      <h1 style={{ color: "green" }}>Result</h1>
      <div className="resultBox">
        <h3>You need more practice!</h3>
        <h2 style={{ color: "blue" }}>
          Your score is {attempted &&( (crctAnswer / attempted) * 100).toFixed(2)}%
        </h2>
        <div className="resultDetails">
          <p>Total number of questions</p>
          <p>15</p>
        </div>
        <div className="resultDetails">
          <p>Number of attempted questions</p>
          <p>{attempted}</p>
        </div>
        <div className="resultDetails">
          <p>Number of correct questions</p>
          <p>{crctAnswer}</p>
        </div>
        <div className="resultDetails">
          <p>Number of wrong questions</p>
          <p>{attempted - crctAnswer}</p>
        </div>
      </div>
      <div className="resultButtons">
        <Link id="playAgainButton" to="/quiz" onClick={handleExit}>
          Play Again
        </Link>
        <Link id="bk2Hme" to="/" onClick={handleExit}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ResultComponent;
