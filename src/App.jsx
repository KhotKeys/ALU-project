import { useState } from 'react'
import NavBar from './components/NavBar'
import ViewTodo from './components/ViewTodo'
import AddTodo from './components/AddTodo'
function App() {
  const [todos, setTodos] = useState([])
  console.log(todos)
  return (
    <>
      <div className=''>
        <NavBar></NavBar>
        <div className="flex  gap-3 w-4/6 m-auto mt-10 max-md:flex-wrap max-md:w-11/12">
          {/* Run Add Todo */}
          <div className="w-full">
            <AddTodo todos={todos} setTodos={setTodos}></AddTodo>
          </div>
          {/* Run View Todo */}
          <div className="w-full">
            <ViewTodo todos={todos} setTodos={setTodos}></ViewTodo>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
