import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <p>This page was coded by{" "}
          <a href="https://kristen-n.netlify.app/" target="_blank">Kristen Namigai</a>🧝🏻‍♀️and is{" "}
          <a href="https://github.com/KrisTenFour/react-weather-app" target="_blank">open-sourced on GitHub</a></p>
      </footer>
    </div>
  );
}

export default App;
