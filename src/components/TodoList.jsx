import React from 'react'
import ToDoItem from './TodoItem'
import { useSelector } from 'react-redux';

function ToDolist() {
    let todos = useSelector(state => state);
    return (
        <div className="my-4">
            {todos.map(todo => {
                return <ToDoItem key={todo.id} todo={todo}/>
            })}
        </div>  
    )
}

export default ToDolist