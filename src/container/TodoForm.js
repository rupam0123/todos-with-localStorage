import React from 'react';
import { connect } from 'react-redux';
import { setTodo, addTodo, updateTodo } from '../actions';
import { useHistory } from 'react-router';
import {Button} from 'react-bootstrap'

function TodoForm (props) {
  const { todo, updatingTodoIndex } = props.todos;
  const history = useHistory();

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    const updatedTodo = { ...todo, [name]: value };
    props.setTodo(updatedTodo);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo.title) return;
    if (!updatingTodoIndex && updatingTodoIndex !== 0) {
      props.addTodo({ ...todo, id: new Date().getTime() });
    } else {
      props.updateTodo({ ...todo });
      
    }
    const todos = localStorage.getItem("todos")||"[]"
    const parseTodo = JSON.parse(todos);
    parseTodo.push({
      todo:todo,
      id:new Date().getTime(),
    })
    localStorage.setItem("todos",JSON.stringify(parseTodo))
    
  }
  

  const handleTodoList=()=>{
    history.push('/todoslist');

  }
  return (
    <div className ="text-center mt-5">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input placeholder="title" name="title" value={todo.title} onChange={handleChangeInput} />
          </label>
        </div><br/>
        <div>
          <label>
            <textarea placeholder="description" name="description" value={todo.description} onChange={handleChangeInput} />
          </label>
        </div>
        <div>
          <Button variant="success" type="submit">{updatingTodoIndex ? 'Update' : 'Submit'}</Button><br/><br/>
          <Button variant ="secondary" onClick={handleTodoList} >ShowList</Button>
        </div>
      </form>
    </div>
  );
}

const mapState = (state) => ({
  todos: state.todos,
});

const mapDispatch = {
  setTodo,
  addTodo,
  updateTodo,
};

export default connect(mapState, mapDispatch)(TodoForm);
