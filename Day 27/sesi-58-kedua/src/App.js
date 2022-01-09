// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Users, { Tes } from './components/Users';
import Header from './components/Header';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "bootstrap"; // Import JS
import "bootstrap/dist/css/bootstrap.min.css" // Import CSS
import Content from './components/Content';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  // const history = useHistory()
  // function handleToUsers () {
  //   history.push("/users")
  // }
  return (
    <BrowserRouter>
      <Header />
      {Tes}
        <Switch>
          <Route path="/" exact>
              <Content />
              {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why do we need test ?
                </a>
              </header> */}
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
