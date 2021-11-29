import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { completeTodo, setUpdatingTodoIndex, deleteTodo } from '../actions';

export default function TodoList () {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo =[]
  }
  else{
    initTodo =JSON.parse(localStorage.getItem("todos"))
  }
  const dispatch = useDispatch();
  const history = useHistory();
   const handleEdit = (todoId) => {
    const todoIndex = initTodo.findIndex((todo) => todo.id === todoId);
    dispatch(setUpdatingTodoIndex(todoIndex));
    history.push('/')
  }

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
    localStorage.setItem("todo",JSON.stringify(initTodo))
  }

  const handleComplete = (event, todoId) => {
    dispatch(completeTodo({ todoId, completed: event.target.checked }));

  }

  return (
    <div className ="text-center" >
      <h3>TodoList</h3>
      <ul>
        {initTodo.map((todo) => (
          <li key={todo.id}>
            <span>
              {todo.todo.title}: {todo.todo.description}
            </span>
            <span>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
              <label>
                complete
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onClick={(event) => handleComplete(event, todo.id)}
                />
              </label>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
