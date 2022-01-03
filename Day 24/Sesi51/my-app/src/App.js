import React, { useState } from 'react';
import './App.css';


function Header(){
  return(
    <>
    <header className="header">
        <h1>My First React App</h1>
    </header>
    </>
  )
}

function Content(){
  return(
      <div className="content">
          <hr />
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <hr />
      </div>
  )
}

function Footer(){
  return(
    <div className="footer">
        <p>&copy; Myself - 2022</p>
    </div>
  )
}

function App() {
  const [name, setName] = useState('Dean')
  const [anotherName, setAnotherName] = useState('CLICKED')
  function changeName (e){
    // cara 1: useState tambahan
    console.log(e)
    // const oldName = name
    // setName(anotherName)
    // setAnotherName(oldName)

    // cara 2: conditional
    setName(name === 'Dean' ? 'CLICKED' : 'Dean')
  }
  
  return (
    <div className="container">
      <p>
        Nama saya adalah {name}
      </p>
      <button onClick={changeName}>
        Click me
      </button>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
