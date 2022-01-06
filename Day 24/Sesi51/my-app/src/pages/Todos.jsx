
import { useEffect, useState } from "react"
import Card from "../components/Card" // import dari luar direktori /pages

function Todos(){
    
  // sesi52 fetch data
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState()
  const [url] = useState('https://jsonplaceholder.typicode.com/todos')
  
  // Fetch data
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(result => setTodos(result))
  }, [])

    return(
        <div className="text-center">
            {/* { JSON.stringify(todos) } */}
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
        </div>
    )
}

export default Todos