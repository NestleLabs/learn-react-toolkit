import React from 'react';
import Todo from '../models/todo';
import TodoPanel from './todo-panel';

export default class Todos extends React.Component {
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
      <ul>
      {
        Todo.getTodos().map(_todo => {
          <TodoPanel key={_todo.uniqueId} title={_todo.header} body={_todo.body} />
        })
      }
      </ul>
    )
  }
}
