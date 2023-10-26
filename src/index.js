import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="focaccia.jpg" alt="display nothing" />;
}

function Intro() {
  return (
    <p>
      I AM FULL STACK WEB DEVELOPER TEACHES AND GUIDES STUDENTS ON DIFFERENT
      PLATFORMS CURRENTLY MY JOB ROLE IS SOFTWARE DEVELOPER AND WORKING IN UDEMY
      FROM THE PAST 5 YEARS"
    </p>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="reactjs" emoji="😡" color="red" />
      <Skill skill="html" emoji="🛜" color="blue" />
      <Skill skill="java" emoji="🍵" color="yellow" />
      <Skill skill="python" emoji="🐍" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
