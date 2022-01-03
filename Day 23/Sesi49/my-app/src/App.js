import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/HeroName';
import Users from './components/Users';
import Baru from './components/Baru';
import Button from './components/Button';

function App() { //
  return ( // sama seperti render dari class component
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Header/>
        <Hero/>
        <Users/>
        <Baru batch={2} logo={logo}/>
        <Button name="Klik aku" />
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
