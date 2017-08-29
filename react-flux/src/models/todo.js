import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher';

const Todo = {
  todos: [],
  value: '',
  observable: {},
  getTodos() {
    return this.todos;
  },
  getValue() {
    return this.value;
  },
  setValue(val) {
    this.value = val;
  },
  addTodo(todo) {
    this.todos.push(todo);
  }
};

Todo.observable = Object.assign(Todo.observable, EventEmitter.prototype, {
  subscribe(eventType, routine) {
    this.on(eventType, routine);
  },
  unsubscribe(eventType, routine) {
    this.removeListener(eventType, routine);
  },
  emit(eventType) {
    this.emit(eventType);
  }
});

Dispatcher.register(function (action) {
  switch(action.actionType) {
    case 'ADD_NEW_TODO':
      Todo.addTodo(action.input);
      break;
    case 'REFRESH_INPUT':
      Todo.setValue(action.input);
      break;
    default:
      break;
  }
});
export default Todo;
