import { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
    const [task, setTask] =useState("")
    const AddTodo = () =>{
        const newTodo = {
            TodoId: todos.length + 1,
            TodoTitle: task,
            Todostatus: false,

        }
        setTodos([...todos, newTodo])
        setTask("")
    }
    return (
        <>
            <div className="bg-slate-600 p-3 h-full">
                <h2 className="text-2xl text-white font-bold mb-2">Add Todo</h2>
                <label className="text-white mt-2 mb-2">Enter Task Name</label>
                <input value={task} onChange={(e)=>setTask(e.target.value)} type="text" className="p-3 w-full mt-1 rounded-sm outline-none" placeholder="Enter Task Name"/>
                <button onClick={()=>AddTodo()} className="p-2 text-white bg-blue-500 mt-3 rounded-md w-full hover:bg-blue-400">Add Todo</button>
            </div>
        </>
    )
}

export default AddTodo;