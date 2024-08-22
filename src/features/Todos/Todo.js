import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo,toggleTodo,deleteTodo,todoSelector } from "./todosSlice";

import './todo.css'

const Todos=()=>{
    const dispatch=useDispatch();
    const todos=useSelector(todoSelector);
    const [text, setText]=useState('');
    console.log(todos)
    const handleAddTodo=()=>{
        if(text.trim()){
            dispatch(addTodo(text));
            setText('')
        }
    }
    return (
        <div className='todo-section'>
        <h2>Stuff to do for the day!</h2>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label='Write some goals for the day'
        />
        <button onClick={handleAddTodo}>Add</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              >
                {todo.text}
              </span>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>Del</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
    
export default Todos