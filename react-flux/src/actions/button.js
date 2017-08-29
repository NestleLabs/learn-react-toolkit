import AppDispatcher from '../dispatcher';

export default class ButtonAction {
  static addNewTodo(text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_TODO',
      input: text
    })
  }
}
