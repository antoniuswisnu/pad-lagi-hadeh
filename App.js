import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Board from "./leaderboard/board";

import Sidebar from "./sidebar/sidebar";
import Level from "./homepage/level";
import Home from "./homepage/home";

import CreateQuiz from "./createQuiz/create3";
import JoinScreen from "./quiz/JoinScreen";
import QuizScreen from "./quiz/QuizScreen";

import DashboardClass from "./createQuiz/dashboardClass";
import DashboardQuestion from "./modal/dashboardQuestion";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  return (
    <div>
      <Sidebar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* <Route path="/dashboard" element={</>} /> */}

          <Route path="/dashboard/create-class" element={<DashboardClass />} />
          <Route path="/dashboard/create-question" element={<DashboardQuestion />} />

          <Route path="/home" element={<Level />} />

          <Route path="/leaderboard" element={<Board />} />

          <Route path="/createquiz" element={<CreateQuiz />} />

          <Route path="/quiz" element={<div className="quiz-container">{isQuizStarted ? <QuizScreen retry={() => setIsQuizStarted(false)} /> : <JoinScreen start={() => setIsQuizStarted(true)} />}</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
