import { useState } from "react"

export default function TodoList() {

    let [todos, setTodos] = useState(['Sample Task']);
    let [newTodo, setNewTodo] =useState('');

    let addNewTask = () => {
       setTodos([...todos, newTodo])
       setNewTodo('');

    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="Add a Task" value={newTodo} onChange={updateTodoValue} /><br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br /><br /><br />
            <hr />
            <h2>ToDo List</h2>
            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo}</li>
                    ))}
            </ul>
        </div>
    )
}