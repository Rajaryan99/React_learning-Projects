import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isdone: false}]);
    let [newTodo, setNewTodo] =useState('');

    let addNewTask = () => {
       setTodos((prevTodos) => {
        return [...prevTodos, {task: newTodo, id: uuidv4(), isdone: false}]
       });

       setNewTodo('');
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) => {
            prevTodos.map((todo) => {
                if(todo.id == id){
                     return {
                ...todo,
                task: todo.task.toUpperCase(),
            }
                } else {
                    return todo;
                }
           
        })
        })
        
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
                        <li key= {todo.id}>
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={ () => deleteTodo(todo.id)}>Delete</button>
                            </li>

                    ))}

                    <button onClick={upperCaseAll}>upparCase all</button>
            </ul>
        </div>
    )
}