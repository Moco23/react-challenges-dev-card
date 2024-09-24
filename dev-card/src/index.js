// importing react
import React from "react";
import ReactDOM from "react-dom";

// importing css
import "./index.css";

// app component

function App() {
  return (
    // card component
    <div className="card">
      {/* avatar photo */}
      <Avatar />
      {/* data */}
      <div className="data">
        {/* intro */}
        <Intro />
        {/* dev skill list */}
        <skillList />
      </div>
    </div>
  );
}

// aditioner components

// Avatar
function Avatar() {
  // dev photo
  return (
    <img
      className="avatar"
      src="profilna-1.jpeg"
      alt="Momcilo Nikolic dev photo"
    />
  );
}

// Intro
function Intro() {
  return (
    <div>
      <h1>Momcilo Nikolic</h1>
      <p>
        My name is Momcilo Nikolic. I am a developer currently in the process of
        entering the world of React development.
      </p>
    </div>
  );
}

// Skill List
function SkillList() {}

// skill
function Skill() {}

// render root method
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
