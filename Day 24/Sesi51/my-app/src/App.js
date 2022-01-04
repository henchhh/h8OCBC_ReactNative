import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';
// import './App.css';
import TimeClass from './components/TimeClass';
import TimeFunc from './components/TimeFunc';
import Card from './components/Card';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import "bootstrap"; // Import JS
import "bootstrap/dist/css/bootstrap.min.css" // Import CSS


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
  const [name, setName] = useState('Dean')
  // const [anotherName, setAnotherName] = useState('CLICKED') // cara 1: useState tambahan
  function changeName (e){
    // cara 1: useState tambahan
    console.log(e)
    // const oldName = name
    // setName(anotherName)
    // setAnotherName(oldName)

    // cara 2: conditional
    setName(name === 'Dean' ? 'CLICKED' : 'Dean')
  }
  
  // sesi52 fetch data
  const [todos, setTodos] = useState([])
  const [url] = useState('https://jsonplaceholder.typicode.com/todos')
  // Fetch data
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(result => setTodos(result))
  }, [])

  // function untuk mendapatkan data spesifik
  const [todo, setTodo] = useState()
  function getTodo(id){
    fetch(url+ `/${id}`)
      .then(response => response.json())
      .then(result => setTodo(result))
  }  

  return (
    <>
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
      <Header />
      <div className='container'>
        <Content />
      </div>
      <Footer />
      {/* <hr />
      <div className='App'>
        <p>
          Nama saya adalah {name}
        </p>
        <button onClick={changeName}>
          Click me
        </button>
      </div>
      <hr />
      <div className='App'>
        <Counter/>
      </div>
      <hr />
      <div className='App'>
        { JSON.stringify(todos) }
        {
          // todo ? (<div></div) : null/undefined/dll => &&
          // todo ? (<div></div) : null/undefined/dll => ||
          // todo &&
          // !todo ||
          !todo || (
            <div className='App'>
              {todo.title} - {todo.userId} - {todo.completed ? 'Completed' : 'Pending'}
              <br/>
              <button onClick={() => setTodo()}>Go back</button>
            </div>
          )
        }
        {
          !todo && todos.map(todo => (
            // <div key={todo.id} className='App'>
            //   <button onClick={()=>getTodo(todo.id)}>
            //     {todo.title} by {todo.userId} - {todo.completed ? 'Completed' : 'Pending'}
            //   </button>
            // </div>
            <Card key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}/>
          ))
        }
      </div> */}
    </>
  );
}

export default App;
