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
      <Avatar/> 
      {/* data */}
      <div className="data">
        {/* intro */}
        <Intro/>
        {/* dev skill list */}
        <skillList/>
      </div>
    </div>
  )
}

// aditioner components

// Avatar
function Avatar() {}

// Intro 
function Intro() {}

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
