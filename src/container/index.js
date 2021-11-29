import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './Todolist';

export default class Todo extends React.Component {
  render () {
    return (
      <div>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}