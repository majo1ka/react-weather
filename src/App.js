import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a href="https://github.com/majo1ka/react-weather" target="_blank">
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
