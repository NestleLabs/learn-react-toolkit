import React from 'react';
import Todo from '../models/todo';
import TodoInput from './todo-input';
import Todos from './todos';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._buildState();
  }

  _buildState() {
    return {
      todos: Todo.getTodos()
    };
  }

  render() {
    return (
        <div className="todo-list">
            <TodoInput value={Todo.getValue()} />
            <Todos todos={Todo.getTodos()} />
        </div>
    )
  }
}
