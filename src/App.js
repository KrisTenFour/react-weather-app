import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <footer>
        <p>This page was coded by{" "}
          <a href="https://kristen-n.netlify.app/" target="_blank" rel="noreferrer">Kristen Namigai</a>ð§ð»ââï¸and is{" "}
          <a href="https://github.com/KrisTenFour/react-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a></p>
      </footer>
    </div>
  );
}

export default App;
