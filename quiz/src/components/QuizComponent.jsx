import React from "react";
import Data from "../data/quizQuestion.json";
import "../App.css";
import { useContext } from "react";
import { Container } from "../App";
import { useNavigate } from "react-router-dom";

const QuizComponent = () => {
  const { currentQuestion, setCurrentQuestion, setCrctAnswer, setAttempted } =
    useContext(Container);
  const navigate = useNavigate();
  const handleOption = (e) => {
    if (e.target.innerText === Data[currentQuestion].answer) {
      setCrctAnswer((prev) => (prev += 1));
      alert("Correct Answer :)")
    } else{
      alert("Wrong Answer :(")
    }
    setAttempted((prev) => (prev += 1));
    handleQuestion("next");
  };

  const handleQuestion = (action) => {
    if (action == "prev") {
      if (currentQuestion != 0) {
        setCurrentQuestion(currentQuestion - 1);
      } else {
        setCurrentQuestion(currentQuestion);
      }
    } else if (action == "next") {
      if (currentQuestion == Data.length - 1) {
        setCurrentQuestion(currentQuestion);
        navigate('/result')
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else if (action == "quit") {
      if (confirm("Are you sure to quit?")) {
        setCurrentQuestion(0);
        setCrctAnswer(0);
        setAttempted(0);
      }
      //
    } else if (action == "finish") {
      setCurrentQuestion(0);
      // navigate to result page
      navigate("/result");
    }
  };

  return (
    <div className="whole-quiz">
      <div className="quiz">
        <div className="questionBlock">
          <h2>Question</h2>
          <p id="questionNo">{currentQuestion + 1} of 15</p>
          <h2 id="question">{Data[currentQuestion].question}</h2>
        </div>

        <div className="optionsBlock">
          <div className="options">
            <button onClick={handleOption} className="option">
              {Data[currentQuestion].optionA}
            </button>
            <button onClick={handleOption} className="option">
              {Data[currentQuestion].optionB}
            </button>
            <button onClick={handleOption} className="option">
              {Data[currentQuestion].optionC}
            </button>
            <button onClick={handleOption} className="option">
              {Data[currentQuestion].optionD}
            </button>
          </div>
          <div className="settingButtons">
            <button onClick={() => handleQuestion("prev")} id="previousButton">
              Previous
            </button>
            <button onClick={() => handleQuestion("next")} id="nextButton">
              Next
            </button>
            <button onClick={() => handleQuestion("quit")} id="quitButton">
              Quit
            </button>
            <button id="finishBtn" onClick={() => handleQuestion("finish")}>
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
