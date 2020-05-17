import React from 'react';
import PropTypes from 'prop-types'
import Todo from './ToDo.component';


const TodoList = ({ todos, onTodoClick }) => (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
  )


export default TodoList;