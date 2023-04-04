/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./sidebar.css";
import logo from "./logo.png";
import logout from "./logout.png";
import Learn from "./learn.png";
import Leaderboard from "./leaderboard.png";
import Profile from "./profile.png";
import Create from "./create.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <img className="imgLogo" src={logo} width="200" height="200" />

      <ul>

        <a href="/createquiz">
          <li>
            <img className="imgItem" src={Create} />
            <p>Create Quiz</p>
          </li>
        </a>

        <a href="/home">
          <li>
            <img className="imgItem" src={Learn} />
            <p>Learn</p>
          </li>
        </a>

        <a href="/leaderboard">
          <li>
            <img className="imgItem" src={Leaderboard} />
            <p>Leaderboard</p>
          </li>
        </a>

        <a href="/profile">
          <li>
            <img className="imgItem" src={Profile} />
            <p>
              Profile
            </p>
          </li>
        </a>

        <a href="/logout">
          <li>
            <img className="imgItem" src={logout} />
            <p>
              Logout
            </p>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Sidebar;
