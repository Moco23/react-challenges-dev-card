// importing react
import React from "react";
import ReactDOM from "react-dom";

// importing css
import "./index.css";

// skills list aray
const skills = [
  { skill: "React", level: "Beginner", color: "#88dded" },
  { skill: "Html + CSS", level: "Pro", color: "#FF4500" },
  { skill: "JS", level: "Intermediate", color: "#F0DB4F" },
  { skill: "SCCS", level: "Pro", color: "#CD6799" },
  { skill: "Hugo", level: "Beginner", color: "#CD6799" },
  { skill: "jQuery", level: "Intermediate", color: "#333333" },
];

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
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

// skill
function Skill({ skill, level, color }) {
  return (
    // dev skill
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Beginner" && "🤗"}
        {level === "Intermediate" && "💪"}
        {level === "Pro" && "🔥"}
      </span>
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
