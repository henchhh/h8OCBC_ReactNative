import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';
import './App.css';
import TimeClass from './components/TimeClass';
import TimeFunc from './components/TimeFunc';
import Card from './components/Card';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import "bootstrap"; // Import JS
import "bootstrap/dist/css/bootstrap.min.css" // Import CSS
import { BrowserRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom'
import States from './pages/States';
import Todos from './pages/Todos';


// function Header(){
//   return(
//     <>
//       <header className="header">
//           <h1>My First React App</h1>
//       </header>
//     </>
//   )
// }

// function Content(){
//   return(
//     <div className="content">
//         <hr />
//         <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         </p>
//         <hr />
//     </div>
//   )
// }

// function Footer(){
//   return(
//     <div className="footer">
//         <p>&copy; Myself - 2022</p>
//     </div>
//   )
// }

function App () {

    // function untuk mendapatkan data spesifik
    // function getTodo(id){
    //   fetch(url+ `/${id}`)
    //     .then(response => response.json())
    //     .then(result => setTodo(result))
    // }  
  const history = useHistory()
  return (
    <Router>
      <div className='mt-5'>
        {/* <div className='containerCenter'>
          <h1>Realtime CLOCK from Function Component</h1>
          <hr className='hrSmallWidth'/>
          <TimeFunc />
        </div>
        <div className='containerCenter'>
          <h1>Realtime CLOCK from Class Component</h1>
          <hr className='hrSmallWidth'/>
          <TimeClass/>
        </div> */}
        {/* <Header />
        <div className='container'>
          <Content />
        </div>
        <Footer />
        <hr /> */}
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/states">States</NavLink>
          </li>
          <li>
            <NavLink exact to="/states/Baru">States with Baru</NavLink>
          </li>
          <li>
            <NavLink exact to="/todos">Todos</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <Counter />
          </Route>
          <Route path="/states" exact>
            <States />
          </Route>
          <Route path="/todos" exact>
            <Todos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
