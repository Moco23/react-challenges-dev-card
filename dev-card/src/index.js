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
        <SkillList />
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
      {/* dev name */}
      <h1>Momcilo Nikolic</h1>
      {/* dev intro */}
      <p>
        My name is Momcilo Nikolic. I am a developer currently in the process of
        entering the world of React development.
      </p>
    </div>
  );
}

// Skill List
function SkillList() {
  return (
    // dev skill list
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="#88dded" />
      <Skill skill="Html + CSS" emoji="💪" color="#FF4500" />
      <Skill skill="JS" emoji="💪" color="#F0DB4F" />
      <Skill skill="SCCS" emoji="💪" color="#CD6799" />
      <Skill skill="Hugo" emoji="💪" color="#CD6799" />
      <Skill skill="jQuery" emoji="💪" color="#333333" />
    </div>
  );
}

// skill
function Skill(props) {
  return (
    // dev skill
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

// render root method
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
