import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://grand-licorice-3046f2.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Alejandra Castillo
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/apcastillo11/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on GitHub.
        </footer>
      </div>
    </div>
  );
}
