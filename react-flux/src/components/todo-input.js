import React from 'react';
import Todo from '../models/todo';
import Input from '../actions/input';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._buildState();
  }

  _buildState() {
    return {
      value: Todo.getValue()
    };
  }

  handleChange(event) {
    Input.refresh(event.target.value);
    console.log("changing", this._buildState());
    this.setState(this._buildState());
  }

  render() {
    return (
        <div className="todo-input">
            <input onChange={this.handleChange.bind(this)}/>
            {Todo.getValue()}
        </div>
    );
  }
}
