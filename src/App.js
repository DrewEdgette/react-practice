import logo from './logo.svg';
import './App.css';
import GPT from './GPT';
import GPTF from './GPTFunctional';
import PokeThing from './PokeThing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <GPTF/> */}
        <PokeThing/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
