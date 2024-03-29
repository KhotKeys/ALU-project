const ViewTodo = ({ todos, setTodos }) => {
    const deleteTodo = (id) =>{
        const newTodo = todos.filter(todo => todo.TodoId != id)
        setTodos(newTodo)
    }
    const updateTodo = (id) =>{
        const newData = todos.map((todo)=>{
            if(todo.TodoId == id){
                return {TodoId:id,TodoTitle:todo.TodoTitle,Todostatus:true}
            }
            return todo
        })
        setTodos(newData)
    }
    return (
        <>
            <div className="bg-slate-300 h-full">
                {/** Table Header */}
                <div className="columns-3 p-2 text-center bg-slate-500 text-white font-bold uppercase">
                    <p>Todo Name</p>
                    <p>Todo status</p>
                    <p>Actions</p>
                </div>
                {/** Table Body */}
                {todos.map((todo, index) => (
                    <div key={index} className="columns-3 p-2 text-center bg-slate-100 text-gray-700 font-bold ">
                        <p>{todo.TodoTitle}</p>
                        <div>
                            {todo.Todostatus ?
                                <p className="text-white bg-green-600 p-1 text-xs rounded-full">Compeleted</p>
                                :
                                <p className="text-white bg-red-600 p-1 text-xs rounded-full">Not Done</p>
                            }

                        </div>
                        <div className="flex gap-10 justify-end">
                            <i onClick={()=>deleteTodo(todo.TodoId)} title="Delete Todo" className="fa fa-times-circle text-red-600 text-2xl cursor-pointer"></i>
                            <i onClick={()=>updateTodo(todo.TodoId)} title="Mark As Compeleted" className="fa fa-check-circle text-green-600 text-2xl cursor-pointer "></i>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ViewTodo;