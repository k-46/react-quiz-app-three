import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";
import ResultComponent from "./components/ResultComponent";

export const Container = React.createContext();

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [crctAnswer, setCrctAnswer] = useState(0);
  return (
    <div className="App">
      <Container.Provider
        value={{
          currentQuestion,
          setCurrentQuestion,
          attempted,
          setAttempted,
          crctAnswer,
          setCrctAnswer,
        }}
      >
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route
            path="/quiz"
            element={
              <QuizComponent
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
              />
            }
          />
          <Route
            path="/result"
            element={
              <ResultComponent
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
              />
            }
          />
        </Routes>
      </Container.Provider>
    </div>
  );
}

export default App;
